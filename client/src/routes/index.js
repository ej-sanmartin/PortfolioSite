import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Footer from "./Footer";

export default () => (
  <HashRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Error} />
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  </HashRouter>
);
