import React from 'react';
import { NavLink as RouteNavLink } from 'react-router-dom';
import {
  Col, Nav, Navbar, NavItem, NavLink,
} from 'shards-react';

const Sidebar = () => (
  <Col tag="aside" className="main-sidebar px-0 col-12 open" lg={{ size: 2 }} md={{ size: 3 }}>
    <div className="main-navbar">
      <Navbar
        className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
        type="light"
      >
        <div className="w-100" href="#" style={{ lineHeight: '25px' }}>
          <div className="d-table m-auto">
            <span className="d-none d-md-inline">Dashboard</span>
          </div>
        </div>
        {/* eslint-disable-next-line */}
        <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
          <i className="material-icons">&#xE5C4;</i>
        </a>
      </Navbar>
    </div>
    <div className="nav-wrapper">
      <Nav className="nav--no-borders flex-column">
        <NavItem>
          <NavLink tag={RouteNavLink} to="/users">
            <i className="material-icons">person</i>
            <span>Users</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RouteNavLink} to="/groups">
            <i className="material-icons">group</i>
            <span>Groups</span>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Col>
);

export default Sidebar;
