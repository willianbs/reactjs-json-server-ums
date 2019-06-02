/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  FormCheckbox,
  FormInput,
} from 'shards-react';

import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

import api from '../../../services/api';

import Sidebar from '../../../components/layout/Sidebar';
import NavBar from '../../../components/layout/NavBar';

import useSignUpForm from '../../../components/Forms/useSignUpForm';

const EditUser = (props) => {
  const {
    match: { params },
  } = props;

  const update = async () => {
    const headers = {
      'Content-Type': 'application/json',
    };
    // eslint-disable-next-line no-use-before-define
    await api.patch(`users/${params.id}`, inputs, { headers });
    ToastsStore.success('User updated!');
    setTimeout(() => {
      window.location = '/users';
    }, 1000);
  };

  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`users/${params.id}`);
      setDataUser(result.data);
    };
    fetchData();
  }, []);

  const [groups, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('groups/');
      setData(result.data);
    };
    fetchData();
  }, []);
  const [userGroups, setDataGroup] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`groupusers/?userId=${params.id}&_expand=group`);
      setDataGroup(result.data);
    };
    fetchData();
  }, []);
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      firstName: dataUser.firstName,
      lastName: dataUser.lastName,
      email: dataUser.email,
    },
    update,
  );
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
              <h3>Edit User</h3>
            </Row>
            <Row>
              <Col>
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Hello, please fill all infos</h6>
                  </CardHeader>
                  <ListGroup flush>
                    <ListGroupItem className="p-3">
                      <Row>
                        <Col>
                          <Form onSubmit={handleSubmit} autoComplete="off">
                            <Row form>
                              {/* First Name */}
                              <Col md="6" className="form-group">
                                <label htmlFor="firstName">First Name *</label>
                                <FormInput
                                  name="firstName"
                                  placeholder="First Name"
                                  required
                                  onChange={handleInputChange}
                                  value={dataUser.firstName}
                                />
                              </Col>
                              {/* Last Name */}
                              <Col md="6" className="form-group">
                                <label htmlFor="lastName">Last Name *</label>
                                <FormInput
                                  name="lastName"
                                  required
                                  placeholder="Last Name"
                                  onChange={handleInputChange}
                                  value={dataUser.lastName}
                                />
                              </Col>
                            </Row>
                            <Row form>
                              {/* Email */}
                              <Col md="6" className="form-group">
                                <label htmlFor="email">Email *</label>
                                <FormInput
                                  type="email"
                                  name="email"
                                  required
                                  placeholder="Email Address"
                                  onChange={handleInputChange}
                                  value={dataUser.email}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col sm="12" md="4" className="form-group">
                                <strong className="text-muted d-block mb-2">Groups</strong>
                                <fieldset>
                                  {groups.map(group => (
                                    <FormCheckbox
                                      key={group.id}
                                      name={`checkbox${group.id}`}
                                      value={inputs.groups}
                                    >
                                      {group.name}
                                    </FormCheckbox>
                                  ))}
                                </fieldset>
                              </Col>
                            </Row>
                            <Button theme="accent">Save</Button>
                          </Form>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
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
export default EditUser;
