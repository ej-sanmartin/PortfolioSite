import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";

export default class About extends Component {
  render() {

    return(
      <Container style={{ height: "22em" }} >
        <div style={{ marginTop: "20em" }}>
          <p style={{ fontSize: "2em",
                      textAlign: "center",
                      float: "left" }}>
            Error: It seems like you got lost!
          </p>
          <NavLink style={{ fontSize: "2em",
                            color: "#BF84D4",
                            float: "right" }} to="/">
            Click here to get back home
          </NavLink>
        </div>
      </Container>
    );
  };
}
