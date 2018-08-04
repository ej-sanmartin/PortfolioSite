import React, { Component } from 'react';
import ProjectCards from "../components/ProjectCards";
import { Container, Col, Row } from "reactstrap";

// setting path to images
const portfolioSite = require("../images/portfolio_site-min.png");
const necesitoApp = require("../images/necesito_app-min.png");
const iphoneButton = require("../images/iphone_switch-min.png");
const stitchCSSImage = require("../images/stitch-min.png");
const upperEatsSide = require("../images/upper_eats_side-min.png");
const ePhotography = require("../images/e_photography_homepage-min.png");
const actionAuctions = require("../images/action_auctions_logo-min.png");
const coinSpin = require("../images/coin-min.png");

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      project: [
        {
          image: portfolioSite,
          alt: "Portfolio Site Home Page Image",
          title: "Portfolio Site",
          description: "This site itself! So meta! A fullstack web app made from scratch with React so that I could display my projects, reflect on my craft, and have a space for myself.",
          link: "https://github.com/ej-sanmartin/PortfolioSite"
        },
        {
          image: ePhotography,
          alt: "E-Photography Homepage Image",
          title: "E-Photography",
          description: "A fake photography site made for myself with images from my Instagram. Only the 'Homepage' was developed but I created this to sharpen my CSS Grid and Flexbox skills",
          link: "https://codepen.io/ej-sanmartin/pen/XBZrOZ"
        },
        {
          image: actionAuctions,
          alt: "Action Auctions Logo",
          title: "Action Auctions",
          description: "A product and Grand Prize Winner of the 'Blockchain for Peace' 2018 Hackathon, this philanthropic platform aims to raise funds for charities. Worked on creating a smart contract in Solidity to enable secure transactions with Ethereum. Loved the people I worked with and was able to take a deep dive into blockchain tehnology.",
          link: "https://github.com/freyaryd/ActionAuctions"
        },
        {
          image: iphoneButton,
          alt: "iPhone Button Swtich Turned On",
          title: "iPhone Button Recreation",
          description: "Recreated the iPhone switch button that you can, now, play with on your web browser of choice.",
          link: "https://codepen.io/ej-sanmartin/pen/djoLBP"
        },
        {
          image: stitchCSSImage,
          alt: "Stitch CSS Image",
          title: "Stitch CSS Image",
          description: "Using pure CSS and SASS, created an image of the beloved Disney Character, Stitch. I create images in CSS to gain a better grasp and comfort in the language.",
          link: "https://codepen.io/ej-sanmartin/pen/RBbrbK"
        },
        {
          image: coinSpin,
          alt: "Spinning Coin",
          title: "Spinning Coin",
          description: "Experimenting with keyframes, animations, and 3D CSS by creating a spinning coin. I love the potential applications that 3D CSS has.",
          link: "https://codepen.io/ej-sanmartin/pen/QBmoQd"
        },
        {
          image: necesitoApp,
          alt: "Necesito App Image",
          title: "Necesito Android App",
          description: "Created during the Hack for Venezuela event, I have since open sourced this bartering android app in hopes to deploy and alleviate the crisis in Venezuela.",
          link: "https://github.com/ej-sanmartin/Necesito"
        },
        {
          image: upperEatsSide,
          alt: "The Upper Eats Side Header Image",
          title: "The Upper Eats Side",
          description: "A quirky, simple food blog created in WordPress. Created as a way to celebrate my love for food and my neighborhood. Allowed me to dive into PHP plug ins and the WordPress ecosystem",
          link: "https://theuppereatsside.wordpress.com/"
        },
      ]
    }
  }

  render() {
    const wrapper = {
      margin: "auto",
      marginTop: "1em"
    };

    const skillType = {
      marginLeft: "1%",
      marginRight: "1%"
    };

    const skillItem = {
      marginLeft: "2%",
      marginRight: "2%"
    };

    let projectCards = this.state.project.map((project, i) => {
      return (
        <Col sm="4" style={wrapper} key={i}>
          <ProjectCards project={project} style={wrapper} />
        </Col>
      )
    });

    return (
      <Container>
        <h1 style={{ marginTop: "0.5em" }}>Projects</h1>
        <div style={{ marginLeft: "3%",
                      marginRight: "3%",
                      background: "#F5E3FB",
                      padding: "0.5em" }}>
          <h3 style={{ marginBottom: ".25em" }}>
            Skills
          </h3>
          <h4 style={skillType}>Languages</h4>
            <p style={skillItem}>HTML, CSS, Javascript(ES6), Python, SQL, MongoDB, Solidity, Java, C#</p>
          <h4 style={skillType}>Front End</h4>
            <p style={skillItem}>React, Redux, jQuery, JSON, APIs, SASS</p>
          <h4 style={skillType}>Back End</h4>
            <p style={skillItem}>Node, Express, Flask, REST</p>
          <h4 style={skillType}>Tools</h4>
            <p style={skillItem}>AWS with Cloud9, Atom, codepen.io, NPM, PIP, Gulp, Git, Heroku, Google Analytics</p>
          <h4 style={skillType}>Development Approaches</h4>
            <p style={skillItem}>Object Oriented Programming, Responsive Design, SEO, Agile Development</p>
          <h4 style={skillType}>Other Fun Tools I Work With</h4>
            <p style={skillItem}>Android Studio, WordPress, iMovie, Canva, Blockchain, Unity</p>
        </div>
        <Row>
          {projectCards}
        </Row>
        <br />
      </Container>
    );
  }
};
