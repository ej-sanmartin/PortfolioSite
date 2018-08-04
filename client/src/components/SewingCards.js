import React, { Component } from 'react';
import { Card,
         CardImg,
         CardText,
         CardBody,
         CardTitle } from 'reactstrap';

export default class SewingCards extends Component {
  render() {
    const cardShadow = {
      WebkitBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      MozBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      boxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)"
    };

    return (
      <div>
        <Card className="grow" style={cardShadow}>
          <CardImg top width="100%" src={this.props.sewing.image} alt={this.props.sewing.alt} />
          <CardBody>
            <CardTitle style={{ marginBottom: ".25em", borderBottom: "solid #BF84D4 1px" }}>{this.props.sewing.title}</CardTitle>
            <CardText>{this.props.sewing.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
};
