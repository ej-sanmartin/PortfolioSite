import React, { Component } from 'react';
import myPortrait from "../images/edgar_sanmartin_portrait.png";
import { Container,
         Card,
         CardImg,
         CardText,
         CardBody,
         CardSubtitle,
         CardTitle } from 'reactstrap';

export default class Home extends Component {
  render() {
    const sizeDown = {
      top: "4.2em",
      margin: "auto",
      minHeight: "300px",
      minWidth: "250px",
      maxHeight: "67%",
      maxWidth: "33.5%",
      WebkitBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      MozBoxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      boxShadow: "2px 2px 12px -1px rgba(0,0,0,0.35)",
      zIndex: "1"
    }

    const line1 = {
      position: "absolute",
      left: "15%",
      height: "49em",
      width: "80%",
      borderRight: "#61099b solid 1px",
      margin: "auto",
      display: "block",
      zIndex: "0"
    }

    const line2 = {
      position: "absolute",
      left: "0",
      bottom: "18.9%",
      height: "60em",
      width: "100%",
      borderBottom: "#61099b solid 1px",
      display: "block",
      zIndex: "0"
    }

    return (
        <Container style={{height:"48em",
                           textAlign: "center" }}>
          <div style={line1} ></div>
          <div style={line2} ></div>
          <div style={{ position: "relative",
                        fontSize: "5.5em",
                        margin: "auto",
                        display: "inline-block",
                        top: ".35em" }}>
            Welcome
          </div>
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
                React Full Stack Developer
              </CardSubtitle>
              <CardText style={{textAlign: "center"}}>
                I like to create cool things with Javascript and Python
              </CardText>
            </CardBody>
          </Card>
        </Container>
    );
  }
};
