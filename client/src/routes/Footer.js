import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import { Row } from 'reactstrap';

export default class Footer extends Component {
  render() {
    const footer = {
      width: "100%",
      backgroundColor: "#BF84D4",
      position: "relative",
      right: "0",
      bottom: "0",
      left: "0",
      padding: "1.5rem",
      borderTop: "solid .01em #61099b",
      zIndex: "1"
    }

    const icons = {
      marginTop: ".5em",
      marginRight: "1em"
    }

    const copyrightStyle = {
      color: "#F5E3FB",
      fontSize: "0.75em",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)"
    }

    return (
      <div style={footer}>
        <Row style={{ display: "flex", justifyContent: "space-between"}}>
          <div>
            <p style={copyrightStyle}>© {(new Date().getFullYear())} Edgar Jr San Martin. All rights reserved.</p>
          </div>
          <div>
            <SocialIcon className="grow-icons" style={icons} url="https://github.com/ej-sanmartin" color="#F5E3FB" />
            <SocialIcon className="grow-icons" style={icons} url="https://www.linkedin.com/in/edgar-jr-san-martin/" color="#F5E3FB" />
            <SocialIcon className="grow-icons" style={icons} url="https://www.youtube.com/channel/UC_JqyD1Kseb0-e8Q9HWRMdQ" color="#F5E3FB" />
            <SocialIcon className="grow-icons" style={icons} url="https://codepen.io/ej-sanmartin/" color="#F5E3FB" />
            <SocialIcon className="grow-icons" style={icons} url="https://www.instagram.com/ej_sanmartin/" color="#F5E3FB" />
          </div>
        </Row>
      </div>
    );
  }
}
