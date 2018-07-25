import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import { Nav, Row, Col } from 'reactstrap';

export default class Footer extends Component {
  render() {
    const footer = {
      width: "103.5%",
      backgroundColor: "#BF84D4",
      position: "relative",
      right: "0",
      bottom: "0",
      left: "0",
      padding: "2rem",
      borderTop: "solid .01em #61099b",
      zIndex: "1"
    }

    const icons = {
      marginTop: "1em",
      marginRight: "1em"
    }

    return (
      <Row style={footer}>
          <SocialIcon style={icons} url="https://github.com/ej-sanmartin" color="#F5E3FB" />
          <SocialIcon style={icons} url="https://www.linkedin.com/in/edgar-jr-san-martin/" color="#F5E3FB" />
          <SocialIcon style={icons} url="https://www.youtube.com/channel/UC_JqyD1Kseb0-e8Q9HWRMdQ" color="#F5E3FB" />
          <SocialIcon style={icons} url="https://angel.co/edgar-jr-san-martin" color="#F5E3FB" />
          <SocialIcon style={icons} url="https://www.instagram.com/ej_sanmartin/" color="#F5E3FB" />
      </Row>
    );
  }
}
