import React from "react";

import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ButtonStyles } from "./own-button.styles";

const Header = () => (
  <div className="header">
    <Link to="/">
      <div className="item">this is logo</div>
    </Link>
    <Link to="/apartments">
      <div className="item">this is apartments</div>
    </Link>
    <Link to="/history">
      <div className="item">this is history</div>
    </Link>
    <Link to="/about">
      <div className="item">this is more-info</div>
    </Link>
    <Link to="/signin">
      <div className="item">this is signin</div>
    </Link>
    <ButtonStyles> SIGN IN </ButtonStyles>
  </div>
);

export default Header;
