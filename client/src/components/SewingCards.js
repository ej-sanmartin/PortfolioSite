import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap';

export default class SewingCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={this.props.sewing.image} alt={this.props.sewing.alt} />
          <CardBody>
            <CardTitle>{this.props.sewing.title}</CardTitle>
            <CardText>{this.props.sewing.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
};
