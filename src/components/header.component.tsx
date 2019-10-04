import React from "react";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { signInStart, signOutStart } from "../redux/user.action";
import { connect } from "react-redux";

class Header extends React.Component<{ signInStart: any; signOutStart:any; currentUser: any }> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { signInStart, signOutStart, currentUser } = this.props;
    console.log("CurrentUser: ", currentUser);
    return (
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
                <NavDropdown.Item href=" https://www.vihti.fi/vesihuoltolaitos/">
                  Vihdin Vesi
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.caruna.fi/palvelut/tuotteet-ja-hinnat/sahkonjakelun-hinta">
                  Caruna
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
              {!currentUser ? (
                <Button onClick={signInStart}>SIGN IN </Button>
              ) : (
                <Button onClick={signOutStart}>SIGN OUT </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch: any) => ({
  signInStart: () => dispatch(signInStart()),
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
