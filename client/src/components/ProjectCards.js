import React, { Component } from 'react';
import { Card,
         CardImg,
         CardText,
         CardBody,
         CardTitle,
         Button } from 'reactstrap';

export default class ProjectCards extends Component {
  render() {
    const cardShadow = {
      WebkitBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      MozBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      boxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
    };

    const buttonStyle = {
      background: "#BF84D4",
      border: "white",
      color: "white",
      outline: "none"
    }

    return (
      <div>
        <Card className="grow" style={cardShadow}>
          <CardImg top width="100%" src={this.props.project.image} alt={this.props.project.alt} />
          <CardBody>
            <CardTitle style={{ marginBottom: ".25em", borderBottom: "solid #BF84D4 1px" }}>{this.props.project.title}</CardTitle>
            <CardText>{this.props.project.description}</CardText>
            <Button style={buttonStyle}><a style={{ color: "white" }} href={this.props.project.link} target="_blank" rel="noopener noreferrer">View</a></Button>
          </CardBody>
        </Card>
      </div>
    );
  }
};
