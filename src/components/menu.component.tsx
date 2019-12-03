import React, { Component } from "react";
import "./menu.styles.scss";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { withRouter } from "react-router-dom";

class Menu extends Component<{
  title: any;
  imageUrl: any;
  size: any;
  history: any;
}> {
  handleClick = (history: any) => {
    history.push("/apartments");
  };

  render() {
    const { title, imageUrl, size, history } = this.props;

    console.log("API KEY: " + process.env.REACT_APP_GOOGLE_MAPS_KEY);

    return (
      <Container>
        <div className={`${size} menu-item`}>
          <Image
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={() => this.handleClick(history)}
          ></Image>
          <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">KATSO</span>
          </div>
        </div>
      </Container>
    );
  }
}

// @ts-ignore
export default withRouter(Menu);
