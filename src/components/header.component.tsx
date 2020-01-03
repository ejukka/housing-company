import React from "react";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { signInStart, signOutStart } from "../redux/user.action";

import { useDispatch, useSelector } from "react-redux";

const getHeaderText = (currentUser: any, config: any) => {
  console.log("config....", config);
  if (!currentUser) {
    return config.headerText;
  } else {
    return config.headerTextAdmin;
  }
};

const getTexts = () => {
  return {
    headerText: `${process.env.REACT_APP_APP_headerText}`,
    headerTextAdmin: `${process.env.REACT_APP_APP_headerTextAdmin}`,
    link1: `${process.env.REACT_APP_APP_link1}`,
    link1Text: `${process.env.REACT_APP_APP_link1Text}`,
    link2: `${process.env.REACT_APP_APP_link2}`,
    link2Text: `${process.env.REACT_APP_APP_link2Text}`,
    link3: `${process.env.REACT_APP_APP_link3}`,
    link3Text: `${process.env.REACT_APP_APP_link3Text}`,
    link4: `${process.env.REACT_APP_APP_link4}`,
    link4Text: `${process.env.REACT_APP_APP_link4Text}`,
    link5: `${process.env.REACT_APP_APP_link5}`,
    link5Text: `${process.env.REACT_APP_APP_link5Text}`,
    link6: `${process.env.REACT_APP_APP_link6}`,
    link6Text: `${process.env.REACT_APP_APP_link6Text}`
  };
};

const Header = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { currentUser } = useSelector(state => state.user);
  const text = getTexts();
  console.log("CurrentUser at header: ", currentUser);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">{getHeaderText(currentUser, text)}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/apartments">Asunnot</Nav.Link>
            <Nav.Link href="/history">historia</Nav.Link>
            <NavDropdown title="Linkkejä" id="collasible-nav-dropdown">
              <NavDropdown.Item href={text.link1} target="_blank">
                {text.link1Text}
              </NavDropdown.Item>
              <NavDropdown.Item href={text.link2} target="_blank">
                {text.link2Text}
              </NavDropdown.Item>
              <NavDropdown.Item href={text.link3} target="_blank">
                {text.link3Text}
              </NavDropdown.Item>
              <NavDropdown.Item href={text.link4} target="_blank">
                {text.link4Text}
              </NavDropdown.Item>
              <NavDropdown.Item href={text.link5} target="_blank">
                {text.link5Text}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={text.link6} target="_blank">
                {text.link6Text}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/about">Lisätietoa</Nav.Link>
            {!currentUser ? (
              <Button onClick={() => dispatch(signInStart())}>SIGN IN </Button>
            ) : (
              <Button onClick={() => dispatch(signOutStart())}>
                SIGN OUT{" "}
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
