import React from "react";

import { Link } from "react-router-dom";

import "./header.styles.scss";
import OwnButton from "./own-button.component";

const Header = () => (
  <div className="header">
    <Link to="/">
      <div className="item">this is logo</div>
    </Link>
    <Link to="/apartments">
      <div className="item">apartments</div>
    </Link>
    <Link to="/history">
      <div className="item">history</div>
    </Link>
    <Link to="/about">
      <div className="item">about</div>
    </Link>
    <Link to="/signin">
      <div className="item">sign in</div>
    </Link>
    <OwnButton> SIGN IN </OwnButton>
  </div>
);

export default Header;
