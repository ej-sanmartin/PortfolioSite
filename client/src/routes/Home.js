import React, { Component } from 'react';
import myPortrait from "../images/edgar_sanmartin_portrait-min.jpg";
import { Container } from "reactstrap"

export default class Home extends Component {
  render() {
    return (
        <Container>
          <img src={myPortrait} alt="Edgar J San Martin Portrait" />
          <h1>Edgar Jr San Martin</h1>
          <h2>ReactJs Fullstack Web Engineer</h2>
          <p>I like to create cool things with Javascript and Python</p>
        </Container>
    );
  }
};
