import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card, CardHeader, CardBody, Button,
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
                    <h6 className="m-0">
                      Users list
                      {' '}
                      <Button size="md" theme="info" className="mb-2 mr-1 float-right">
                        <i className="material-icons">add_circle</i>
                        {' '}
New user
                      </Button>
                    </h6>
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
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.id}</td>
                            <td>
                              {/* <Button
                                size="sm"
                                outline
                                theme="info"
                                onClick={() => this.handleUserDeleteClick(user.id)}
                                className="mb-2 mr-1 float-right"
                              >
                                <i className="material-icons">edit</i>
                              </Button> */}
                              <Button
                                size="sm"
                                outline
                                theme="danger"
                                onClick={() => this.handleUserDeleteClick(user.id)}
                                className="mb-2 mr-1 float-right"
                              >
                                <i className="material-icons">delete_forever</i>
                              </Button>
                            </td>
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
                    <h6 className="m-0">
                      Groups list
                      {' '}
                      <Button size="md" theme="info" className="mb-2 mr-1 float-right">
                        <i className="material-icons">add_circle</i>
                        {' '}
New group
                      </Button>
                    </h6>
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
                          <tr key={group.id}>
                            <td>{group.id}</td>
                            <td>{group.name}</td>
                            <td>{group.id}</td>
                            <td className="align-right">
                              {/* <Button
                                size="sm"
                                outline
                                theme="info"
                                onClick={() => this.handleGroupEditClick(group.id)}
                                className="mb-2 mr-1 float-right"
                              >
                                <i className="material-icons">edit</i>
                              </Button> */}
                              <Button
                                size="sm"
                                outline
                                theme="danger"
                                onClick={() => this.handleGroupDeleteClick(group.id)}
                                className="mb-2 mr-1 float-right"
                              >
                                <i className="material-icons">delete_forever</i>
                              </Button>
                            </td>
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
