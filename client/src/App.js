import React, { Component } from 'react';
import Routes from "./routes";
import PropTypes from "prop-types";

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Routes />
        {children}
      </div>
    );
  }
};

export default App;
