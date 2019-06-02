import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Card, CardHeader, CardBody, Button,
} from 'shards-react';

import api from '../../services/api';

import Sidebar from '../../components/layout/Sidebar';
import NavBar from '../../components/layout/NavBar';

const Main = () => (
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
            <Col>Please, use the side menu to navigate.</Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
);
export default Main;
