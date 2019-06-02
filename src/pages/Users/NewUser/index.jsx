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

const NewUser = () => {
  const signup = async () => {
    // eslint-disable-next-line no-use-before-define
    await api.post('users/', inputs);
    ToastsStore.success('New user added with sucess!');
    setTimeout(() => {
      window.location = '/users';
    }, 1000);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      firstName: '',
      lastName: '',
      email: '',
    },
    signup,
  );

  // const [groups, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await api.get('groups/');
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);
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
              <h3>New User</h3>
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
                                  value={inputs.firstName}
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
                                  value={inputs.lastName}
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
                                  value={inputs.email}
                                />
                              </Col>
                            </Row>
                            {/* <Row>
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
                            </Row> */}
                            <Button theme="accent">Add new user</Button>
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
export default NewUser;
