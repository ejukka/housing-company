import React, { Component } from "react";
import "./menu.styles.scss";

class Menu extends Component<{
  title: any;
  imageUrl: any;
  size: any;
  history: any;
  linkUrl: any;
  match: any;
}> {
  render() {
    const { title, imageUrl, size, history, linkUrl, match } = this.props;
    return (
      <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">WATCH</span>
        </div>
      </div>
    );
  }
}

export default Menu;
