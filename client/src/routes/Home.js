import React, { Component } from 'react';
import myPortrait from "../images/edgar_sanmartin_portrait_min.png";
import { Container,
         Card,
         CardImg,
         CardText,
         CardBody,
         CardSubtitle,
         CardTitle} from 'reactstrap';

export default class Home extends Component {
  render() {
    const sizeDown = {
      top: "20em",
      margin: "auto",
      maxHeight: "60%",
      maxWidth: "30%",
      WebkitBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      MozBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      boxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      zIndex: "1"
    }

    const line1 = {
      position: "absolute",
      left: "15%",
      height: "60em",
      width: "80%",
      borderRight: "#61099b solid 1px",
      margin: "auto",
      display: "block",
      zIndex: "0"
    }

    const line2 = {
      position: "absolute",
      left: "0",
      bottom: "28.8%",
      height: "60em",
      width: "100%",
      borderBottom: "#61099b solid 1px",
      display: "block",
      zIndex: "0"
    }

    return (
        <Container style={{height:"60em"}}>
          <div style={line1} ></div>
          <div style={line2} ></div>
          <Card style={sizeDown} >
            <CardImg src={myPortrait} alt="Edgar J San Martin Portrait" />
            <CardBody>
              <CardTitle style={{textAlign: "center",
                                 marginBottom: ".5em",
                                 borderBottom: "solid #BF84D4 1px"}}>
                                 Edgar Jr San Martin
              </CardTitle>
              <CardSubtitle style={{textAlign: "center",
                                    marginBottom: ".5em",}}>
                                    ReactJs Fullstack Web Engineer
              </CardSubtitle>
              <CardText style={{textAlign: "center"}}>I like to create cool things with Javascript and Python</CardText>
            </CardBody>
          </Card>
        </Container>
    );
  }
};
