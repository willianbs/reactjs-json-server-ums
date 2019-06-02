import React, { useState, useEffect } from 'react';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import {
  Container, Row, Col, Card, CardHeader, CardBody, Button,
} from 'shards-react';

import api from '../../services/api';

import Sidebar from '../../components/layout/Sidebar';
import NavBar from '../../components/layout/NavBar';

const Groups = () => {
  const [dataGroups, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('groups/');
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
          {/* Groups */}
          <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <h3>Groups</h3>
            </Row>
            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">
                      Groups list
                      {' '}
                      <Button
                        size="md"
                        theme="info"
                        href="group/new"
                        className="mb-2 mr-1 float-right"
                      >
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
                          <th scope="col" className="border-0" />
                        </tr>
                      </thead>
                      <tbody>
                        {dataGroups.map(group => (
                          <tr key={group.id}>
                            <td>{group.id}</td>
                            <td>
                              <a href={`group/${group.id}`}>{group.name}</a>
                            </td>
                            <td>
                              <Button
                                size="sm"
                                outline
                                theme="danger"
                                value={group.id}
                                onClick={async () => {
                                  await api.delete(`groups/${group.id}`);
                                  const arrayCopy = dataGroups.filter(row => row.id !== group.id);
                                  ToastsStore.info('Group removed!');
                                  setData(arrayCopy);
                                }}
                                className="mb-2 mr-1 float-right"
                              >
                                <i className="material-icons">delete_forever</i>
                              </Button>
                              {/* <Button
                                size="sm"
                                outline
                                theme="info"
                                href={`group/${group.id}/edit`}
                                className="mb-2 mr-1 float-right"
                              >
                                <i className="material-icons">edit</i>
                              </Button> */}
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
export default Groups;
