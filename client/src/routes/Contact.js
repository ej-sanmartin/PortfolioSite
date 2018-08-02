import React, { Component } from "react";
import { Container } from "reactstrap";

const withLandon = require("../images/with_landon-min.jpg");

export default class Contact extends Component {
  render() {
    const grid = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(48%, 1fr))",
      gridGap: "1em",
      alignItems: "start",
      marginTop: "2em",
    };

    return (
      <Container>
        <h1 style={{ marginTop: "0.5em" }}>Contact</h1>
        <div style={grid}>
          <div>
            <p style={{ fontSize: "1.5em", marginBottom: "0.25em" }}>Thank You For Your Time</p>
            <p style={{ textAlign: "left",
                        fontSize: "1em",
                        padding: "0",
                        margin: "0" }}>
              You are free to email me directly at <a href="mailto:esanmartinjr@fordham.edu" style={{ color: "#BF84D4" }}>esanmartinjr@fordham.edu</a> for work or to just tell me a good joke.
              Typically, I respond back within a day or two, unless particularly busy.
              Feel free to send me spam as well, I know a site I could sell it to if you do.
            </p>
            <p style={{ textAlign: "center",
                        fontSize: "0.9em",
                        marginTop: ".5em" }}>
              Scroll down to find my social media links.
            </p>
            <img style={{ maxHeight: "250px",
                          maxWidth: "250px",
                          display: "block",
                          margin: "0 auto" }}
                  src={withLandon}
                  alt="Picture with my baby nephew, Landon" />
            <p style={{ textAlign: "center",
                        fontSize: "0.75em",
                        marginTop: ".5em" }}>
              My baby nephew, Landon, and myself.
            </p>
          </div>
          <div style={{ background: "#F5E3FB", padding: "0.5em" }}>
            <p style={{ fontSize: "1.5em",
                        marginBottom: "0.25em",
                        textAlign: "center" }}>
              Some Parting Words
            </p>
            <ul style={{ listStyle: "none", paddingRight: "1em" }}>
              <li style={{ fontSize: "1.3em" }}><em>If you were:</em></li>
              <li>Impressed,</li>
              <li>Intriqued,</li>
              <li>Thought "I need to work with this guy",</li>
              <li>"I need me some of that",</li>
              <li>"He makes some good plush dolls",</li>
              <li>Then email me with your project proposal and your budget.</li>
              <li style={{ fontSize: "1.3em" }}><em>If you thought I was:</em></li>
              <li>Chill,</li>
              <li>Interesting,</li>
              <li>Someone You Would Play Video Games With,</li>
              <li>Then feel free to follow me on social media and connect with me.</li>
              <li>I love meeting people from all walks of life.</li>
              <li style={{ fontSize: "1.3em" }}><em>Thank you, again, for your time</em></li>
              <li style={{ textAlign: "right" }}><em>Best, Edgar Jr. San Martin</em></li>
            </ul>
          </div>
        </div>
        <h2 style={{ textAlign: "right",
                     fontSize: "2em",
                     marginTop: "1em",
                     paddingTop: "0.25em",
                     borderTop: "1px solid #BF84D4",
                     marginBottom: "1em" }}>
          I would <span style={{ color: "#BF84D4" }}>love</span> to hear from you.
        </h2>
      </Container>
    );
  }
};
