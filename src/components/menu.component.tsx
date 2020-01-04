import React from "react";
import "./menu.styles.scss";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { withRouter } from "react-router-dom";

const Menu = (props: any) => {
  const handleClick = (history: any) => {
    history.push("/apartments");
  };

  return (
    <Container>
      <div className={`${props.size} menu-item`}>
        <Image
          className="background-image"
          style={{ backgroundImage: `url(${props.imageUrl})` }}
          onClick={() => handleClick(props.history)}
        />
        <div className="content">
          <h1 className="title">{props.title.toUpperCase()}</h1>
          <span className="subtitle">KATSO</span>
        </div>
      </div>
    </Container>
  );
};

export default withRouter(Menu);
