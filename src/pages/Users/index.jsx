import React, { useState, useEffect } from 'react';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import {
  Container, Row, Col, Card, CardHeader, CardBody, Button,
} from 'shards-react';

import api from '../../services/api';

import Sidebar from '../../components/layout/Sidebar';
import NavBar from '../../components/layout/NavBar';

const Users = () => {
  const [dataUsers, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('users/');
      setData(result.data);
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
          {/* Users */}
          <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <h3>Users</h3>
            </Row>
            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">
                      Users list
                      {' '}
                      <Button
                        size="md"
                        theme="info"
                        href="user/new"
                        className="mb-2 mr-1 float-right"
                      >
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
                          <th scope="col" className="border-0" />
                        </tr>
                      </thead>
                      <tbody>
                        {dataUsers.map(user => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                              <a href={`user/${user.id}`}>{user.firstName}</a>
                            </td>
                            <td>
                              <a href={`user/${user.id}`}>{user.lastName}</a>
                            </td>
                            <td>{user.email}</td>
                            <td>
                              <Button
                                size="sm"
                                outline
                                theme="danger"
                                value={user.id}
                                onClick={async () => {
                                  await api.delete(`users/${user.id}`);
                                  const arrayCopy = dataUsers.filter(row => row.id !== user.id);
                                  ToastsStore.info('User removed!');
                                  setData(arrayCopy);
                                }}
                                className="mb-2 mr-1 float-right"
                              >
                                <i className="material-icons">delete_forever</i>
                              </Button>
                              <Button
                                size="sm"
                                outline
                                theme="info"
                                href={`user/${user.id}/edit`}
                                className="mb-2 mr-1 float-right"
                              >
                                <i className="material-icons">edit</i>
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
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
    </Container>
  );
};
export default Users;
