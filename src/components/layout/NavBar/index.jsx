import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
} from 'shards-react';

const NavBar = () => (
  <div className="main-navbar bg-white sticky-top">
    <Container className="p-0">
      <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
        <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
          <InputGroup seamless className="ml-3">
            <InputGroupAddon type="prepend">
              <InputGroupText>
                <i className="material-icons">search</i>
              </InputGroupText>
            </InputGroupAddon>
            <FormInput className="navbar-search" placeholder="Search for something..." />
          </InputGroup>
        </Form>
        <Nav navbar className="border-left flex-row">
          Hello,
          {' '}
          <strong>Admin</strong>
        </Nav>
        <nav className="nav">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center"
          >
            <i className="material-icons">&#xE5D2;</i>
          </a>
        </nav>
      </Navbar>
    </Container>
  </div>
);

export default NavBar;
