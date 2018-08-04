import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    const navbarDeco = {
      borderBottom: "solid #61099b .1em",
      zIndex: "1",
      color: "black",
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbarDeco} >
        <a className="navbar-brand" href="/">Edgar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
