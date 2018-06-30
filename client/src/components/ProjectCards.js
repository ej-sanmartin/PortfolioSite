import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

export default class ProjectCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={this.props.project.image} alt={this.props.project.alt} />
          <CardBody>
            <CardTitle>{this.props.project.title}</CardTitle>
            <CardText>{this.props.project.description}</CardText>
            <Button><a href={this.props.project.link} target="_blank" rel="noopener noreferrer">Source Code</a></Button>
          </CardBody>
        </Card>
      </div>
    );
  }
};
