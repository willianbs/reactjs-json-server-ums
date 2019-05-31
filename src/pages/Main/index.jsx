import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card, CardHeader, CardBody,
} from 'shards-react';

import api from '../../services/api';

import Sidebar from '../../components/layout/Sidebar';
import NavBar from '../../components/layout/NavBar';

const Main = () => {
  const [dataUsers, setData] = useState([]);
  const [dataGroups, setGroupsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('users/');
      setData(result.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('groups/');
      setGroupsData(result.data);
    };
    fetchData();
  }, []);

  // console.log(userData);
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
          {/* Users */}
          <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <h3>Welcome to our dashboard</h3>
            </Row>
            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Users list</h6>
                  </CardHeader>
                  <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col" className="border-0">
                            #
                          </th>
                          <th scope="col" className="border-0">
                            First Name
                          </th>
                          <th scope="col" className="border-0">
                            Last Name
                          </th>
                          <th scope="col" className="border-0">
                            Email
                          </th>
                          <th scope="col" className="border-0">
                            Groups
                          </th>
                          <th scope="col" className="border-0" />
                        </tr>
                      </thead>
                      <tbody>
                        {dataUsers.map(user => (
                          <tr>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                            <td>EDIT | DEL</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            {/* Groups */}

            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Groups list</h6>
                  </CardHeader>
                  <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                      <thead className="bg-light">
                        <tr>
                          <th scope="col" className="border-0">
                            #
                          </th>
                          <th scope="col" className="border-0">
                            Group Name
                          </th>
                          <th scope="col" className="border-0">
                            Users
                          </th>
                          <th scope="col" className="border-0" />
                        </tr>
                      </thead>
                      <tbody>
                        {dataGroups.map(group => (
                          <tr>
                            <td>{group.id}</td>
                            <td>{group.name}</td>
                            <td>{group.id}</td>
                            <td>EDIT | DEL</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Main;
