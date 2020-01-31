import React from "react";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { signInStart, signOutStart } from "../../redux/user.action";

import { useDispatch, useSelector } from "react-redux";

import { headerConfig } from "../../utils/config";

const getHeaderText = (currentUser: string, config: any) => {
  if (!currentUser) {
    return config.headerText;
  } else {
    return config.headerTextAdmin;
  }
};

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.user);
  const text = headerConfig;
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">{getHeaderText(currentUser, text)}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/apartments">{text.header_text1}</Nav.Link>
            <Nav.Link href="/history">{text.header_text2}</Nav.Link>
            <NavDropdown title={text.header_text3} id="collasible-nav-dropdown">
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
              {currentUser ? (
                <NavDropdown.Item
                  href={text.admin_page_link_text}
                  target="_blank"
                >
                  {text.admin_page_link}
                </NavDropdown.Item>
              ) : null}
            </NavDropdown>
            {!currentUser ? null : <Nav.Link href="/admin">admin</Nav.Link>}
          </Nav>
          <Nav>
            <Nav.Link href="/about">{text.header_text4}</Nav.Link>
            {!currentUser ? (
              <Button onClick={() => dispatch(signInStart())}>
                {text.sign_in_text}
              </Button>
            ) : (
              <Button onClick={() => dispatch(signOutStart())}>
                {text.sign_out_text}
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
