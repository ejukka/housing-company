import React from "react";

import { Link } from "react-router-dom";

// import "./header.styles.scss";
import OwnButton from "./own-button.component";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => (
  <Container>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Housing company</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/apartments">apartments</Nav.Link>
          <Nav.Link href="/history">history</Nav.Link>
          <Nav.Link href="/about">about</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More details</Nav.Link>
          <OwnButton> SIGN IN </OwnButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default Header;
