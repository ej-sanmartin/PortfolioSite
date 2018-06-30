import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';

export default class MusicCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={this.props.music.cover} alt={this.props.music.alt} />
          <CardBody>
            <CardTitle>{this.props.music.album}</CardTitle>
            <CardSubtitle>{this.props.music.date}</CardSubtitle>
            <CardText>{this.props.music.description}</CardText>
            <Button><a href={this.props.music.link} target="_blank" rel="noopener noreferrer">Link</a></Button>
           </CardBody>
         </Card>
      </div>
    );
  }
};
