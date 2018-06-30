import React, { Component } from 'react';
import ProjectCards from "../components/ProjectCards";
import { Container, Col, Row } from "reactstrap";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      project: [
        {
          image: "#",
          alt: "Project Image",
          title: "Portfolio Site",
          description: "Write a short summary",
          link: "#"
        },
        {
          image: "#",
          alt: "Project Image",
          title: "Eccommerce Site",
          description: "Write a short summary",
          link: "#"
        },
        {
          image: "#",
          alt: "Project Image",
          title: "Udacity Project",
          description: "Write a short summary",
          link: "#"
        },
      ]
    }
  }

  render() {
    let projectCards = this.state.project.map(project => {
      return (
        <Col sm="4">
          <ProjectCards project={project} />
        </Col>
      )
    });

    return (
      <Container>
        <h3>Projects</h3>
        <Row>
          {projectCards}
        </Row>
        <br />
      </Container>
    );
  }
};
