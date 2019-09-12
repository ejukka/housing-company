import React, { Component } from "react";
import "./menu.styles.scss";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

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
      <Container>
        <div
          className={`${size} menu-item`}
          onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
          <Image
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></Image>
          <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">WATCH</span>
          </div>
        </div>
      </Container>
    );
  }
}

export default Menu;
