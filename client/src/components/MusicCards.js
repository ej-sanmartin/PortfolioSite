import React, { Component } from 'react';
import { Card,
         CardImg,
         CardText,
         CardBody,
         CardTitle,
         CardSubtitle,
         Button } from 'reactstrap';

export default class MusicCards extends Component {
  render() {
    const cardShadow = {
      WebkitBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      MozBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      boxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)"
    };

    const buttonStyle = {
      background: "#BF84D4",
      border: "white"
    }

    return (
      <div>
        <Card style={cardShadow}>
          <CardImg top width="100%" src={this.props.music.cover} alt={this.props.music.alt} />
          <CardBody>
            <CardTitle style={{ marginBottom: ".5em", borderBottom: "solid #BF84D4 1px" }}>{this.props.music.album}</CardTitle>
            <CardSubtitle style={{ marginBottom:".5em" }}>{this.props.music.date}</CardSubtitle>
            <CardText>{this.props.music.description}</CardText>
            <Button style={buttonStyle}><a style={{ color: "white" }} href={this.props.music.link} target="_blank" rel="noopener noreferrer">Link</a></Button>
           </CardBody>
         </Card>
      </div>
    );
  }
};
