import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import { Nav, NavItem, Row, Col } from 'reactstrap';

export default class Footer extends Component {
  render() {
    const footer = {
      bottom: "0",
      width: "100%",
      backgroundColor: "#BF84D4",
    }

    return (
      <Row style={footer}>
        <Col sm={{ size: 2, offset: 4 }}>
          <SocialIcon url="https://github.com/ej-sanmartin" color="#F5E3FB" />
        </Col>
        <Col sm={{ size: 2, offset: 6 }}>
          <SocialIcon url="https://angel.co/edgar-jr-san-martin" color="#F5E3FB" />
        </Col>
        <Col sm={{ size: 2, offset: 8 }}>>
          <SocialIcon url="https://www.linkedin.com/in/edgar-jr-san-martin/" color="#F5E3FB" />
        </Col>
        <Col sm={{ size: 2, offset: 10 }}>
          <SocialIcon url="https://www.instagram.com/ej_sanmartin/" color="#F5E3FB" />
        </Col>
      </Row>
    );
  }
}
