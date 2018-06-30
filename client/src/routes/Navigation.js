import React, { Component } from "react";
import logoImage from "../images/logo-min.jpg";
import { Image, responsive, Grid, Row, Col, circle } from "react-bootstrap";
import {
  Collapse,
  Container,
  Jumbotron,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const navStyle = {
      display: "inline-block",
      width: "100%"
    }

    return (
      <div className="clearfix">
        <Jumbotron fluid>
          <Container fluid>
              <Row>
                <Navbar className="float-left" color="faded" light expand="md" style={navStyle}>
                  <Col xs={6} md={3}>
                    <NavLink href="/"><Image style={{maxHeight: "100px"}} src={logoImage} alt="Logo" circle responsive /></NavLink>
                  </Col>
                  <Col xs={6} md={9}>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                        <Col md={3}>
                          <NavItem>
                            <NavLink href="/projects">Projects</NavLink>
                          </NavItem>
                        </Col>
                        <Col md={3}>
                          <NavItem>
                            <NavLink href="/about">About</NavLink>
                          </NavItem>
                        </Col>
                        <Col md={3}>
                          <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                          </NavItem>
                        </Col>
                      </Nav>
                    </Collapse>
                  </Col>
                </Navbar>
              </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
