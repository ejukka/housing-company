import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { withRouter } from "react-router-dom";
import {
  MenuContainer,
  ItemsContent,
  TitleH1,
  SubtitleSpan
} from "./menu.component.styles";

const Menu = (props: any) => {
  const handleClick = (history: any) => {
    history.push("/apartments");
  };

  return (
    <Container>
      <MenuContainer>
        <Image
          className="background-image"
          style={{ backgroundImage: `url(${props.imageUrl})` }}
          onClick={() => handleClick(props.history)}
        />
        <ItemsContent>
          <TitleH1>{props.title.toUpperCase()}</TitleH1>
          <SubtitleSpan>KATSO</SubtitleSpan>
        </ItemsContent>
      </MenuContainer>
    </Container>
  );
};

export default withRouter(Menu);
