import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card, CardHeader, Button,
} from 'shards-react';

import api from '../../../services/api';

import Sidebar from '../../../components/layout/Sidebar';
import NavBar from '../../../components/layout/NavBar';

const UserDetail = (props) => {
  const [dataUser, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {
        match: { params },
      } = props;
      const result = await api.get(`users/${params.id}?_embed=groupusers`);
      setData(result.data);
    };
    fetchData();
  }, []);
  // console.log(dataUser);
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
        >
          <NavBar />
          {/* User */}
          <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <h3>User details</h3>
            </Row>
            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">
#
                      {dataUser.id}
                    </h6>
                  </CardHeader>
                </Card>
                <Card small className="mb-4 pt-3">
                  <CardHeader className="border-bottom text-center">
                    <h4 className="mb-0">
                      {dataUser.firstName}
                      {' '}
                      {dataUser.lastName}
                    </h4>
                    <h6 className="mb-0">{dataUser.email}</h6>
                    <p className="mb-0">Groups: [todo]</p>
                    {/* <span className="text-muted d-block mb-2">
                      {Object.keys(dataUser.groupusers).map(group => (
                        <Button
                          key={group.id}
                          pill
                          theme="danger"
                          outline
                          size="md"
                          className="mb-2"
                        >
                          <i className="material-icons mr-1">delete</i>
                          {' '}
GroupId:
                          {group.groupId}
                        </Button>
                      ))}
                    </span> */}
                  </CardHeader>
                </Card>
                <Button
                  pill
                  theme="danger"
                  outline
                  size="md"
                  onClick={async () => {
                    await api.delete(`users/${dataUser.id}`);
                    window.location = '/users'; // forcing refresh
                  }}
                  className="mb-2"
                >
                  <i className="material-icons mr-1">delete</i>
                  {' '}
Remove user
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default UserDetail;
