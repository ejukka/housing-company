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
import menuProps from "../../types/MenuProps";
import { History, LocationState } from "history";
import { menuConfig } from "../../utils/config";

const Menu = (props: menuProps) => {
  const handleClick = (history: History<LocationState>) => {
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
          <SubtitleSpan>{menuConfig.subtitle}</SubtitleSpan>
        </ItemsContent>
      </MenuContainer>
    </Container>
  );
};

// @ts-ignore
export default withRouter(Menu);
