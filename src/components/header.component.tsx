import React from "react";

import OwnButton from "./own-button.component";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => (
  <Container>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Vihdin Mäkirinne 2</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/apartments">Asunnot</Nav.Link>
          <Nav.Link href="/history">historia</Nav.Link>
          <NavDropdown title="Linkkejä" id="collasible-nav-dropdown">
            <NavDropdown.Item href="https://www.vihti.fi/">
              Vihdin Kunta
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.rosknroll.fi/">
              Rosk & Roll
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.vihtiski.fi/">
              Vihti Ski
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.puuhapark.fi/">
              Puuhapark
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/about">Lisätietoa</Nav.Link>
          <OwnButton href="/signin"> SIGN IN </OwnButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default Header;
