import React from 'react';
import { NavLink as RouteNavLink } from 'react-router-dom';
import { Col, NavItem, NavLink } from 'shards-react';

const Sidebar = () => (
  <Col tag="aside" className="main-sidebar px-0 col-12 open" lg={{ size: 2 }} md={{ size: 3 }}>
    <NavItem>
      <NavLink tag={RouteNavLink} to="/groups">
        <div className="d-inline-block item-icon-wrapper" />
        <span>LALAL</span>
        <div className="d-inline-block item-icon-wrapper" />
      </NavLink>
    </NavItem>
  </Col>
);

export default Sidebar;
