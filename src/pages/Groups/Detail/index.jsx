/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card, CardHeader, Button,
} from 'shards-react';

import api from '../../../services/api';

import Sidebar from '../../../components/layout/Sidebar';
import NavBar from '../../../components/layout/NavBar';

const GroupDetail = (props) => {
  const {
    match: { params },
  } = props;
  const [dataGroup, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`groups/${params.id}?_embed=groupusers`);
      setData(result.data);
    };
    fetchData();
  }, []);
  const [users, setDataUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`groupusers/?groupId=${params.id}&_expand=user`);
      setDataUser(result.data);
    };
    fetchData();
  }, []);
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
          {/* Group */}
          <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <h3>Group details</h3>
            </Row>
            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">
#
                      {dataGroup.id}
                    </h6>
                  </CardHeader>
                </Card>
                <Card small className="mb-4 pt-3">
                  <CardHeader className="border-bottom text-center">
                    <h4 className="mb-0">{dataGroup.name}</h4>
                    <p className="mb-0">Users: </p>
                    <br />
                    <span className="text-muted d-block mb-2">
                      {users.map(user => (
                        <Button key={user.id} pill theme="info" outline size="md" className="mb-2">
                          <i className="material-icons mr-1">person</i>
                          {' '}
                          {user.user.firstName}
                          {' '}
                          {user.user.lastName}
                          {' '}
(
                          {user.user.email}
)
                        </Button>
                      ))}
                    </span>
                  </CardHeader>
                </Card>
                <Button
                  pill
                  theme="danger"
                  outline
                  size="md"
                  onClick={async () => {
                    await api.delete(`groups/${dataGroup.id}`);
                    window.location = '/groups'; // forcing refresh
                  }}
                  className="mb-2"
                >
                  <i className="material-icons mr-1">delete</i>
                  {' '}
Remove Group
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default GroupDetail;
