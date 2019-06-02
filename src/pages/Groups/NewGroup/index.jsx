/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
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
  // FormCheckbox,
  FormInput,
} from 'shards-react';

import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

import api from '../../../services/api';

import Sidebar from '../../../components/layout/Sidebar';
import NavBar from '../../../components/layout/NavBar';

import useSignUpForm from '../../../components/Forms/useSignUpForm';

const NewGroup = () => {
  const signup = async () => {
    // eslint-disable-next-line no-use-before-define
    await api.post('groups/', inputs);
    ToastsStore.success('New group added!');
    setTimeout(() => {
      window.location = '/groups';
    }, 1000);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      name: '',
    },
    signup,
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
          {/* Group */}
          <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <h3>New Group</h3>
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
                              {/* Name */}
                              <Col md="6" className="form-group">
                                <label htmlFor="firstName">Group Name *</label>
                                <FormInput
                                  name="name"
                                  placeholder="Group Name"
                                  required
                                  onChange={handleInputChange}
                                  value={inputs.name}
                                />
                              </Col>
                            </Row>
                            <Button theme="accent">Add new group</Button>
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
export default NewGroup;
