import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div>
    <p>Error: It seems like you got lost!</p>
    <NavLink to="/">Click here to get back home</NavLink>
  </div>
);
