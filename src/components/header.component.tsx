import React from "react";

import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { signInStart, signOutStart } from "../redux/user.action";
import { connect } from "react-redux";

class Header extends React.Component<{
  signInStart: any;
  signOutStart: any;
  currentUser: any;
}> {
  constructor(props: any) {
    super(props);
  }

  getText(currentUser: any, config: any) {
    console.log("config....", config);
    if (!currentUser) {
      return config.headerText;
    } else {
      return config.headerTextAdmin;
    }
  }

  render() {
    const config = {
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
    const { signInStart, signOutStart, currentUser } = this.props;
    console.log("CurrentUser: ", currentUser);
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            {this.getText(currentUser, config)}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/apartments">Asunnot</Nav.Link>
              <Nav.Link href="/history">historia</Nav.Link>
              <NavDropdown title="Linkkejä" id="collasible-nav-dropdown">
                <NavDropdown.Item href={config.link1} target="_blank">
                  {config.link1Text}
                </NavDropdown.Item>
                <NavDropdown.Item href={config.link2} target="_blank">
                  {config.link2Text}
                </NavDropdown.Item>
                <NavDropdown.Item href={config.link3} target="_blank">
                  {config.link3Text}
                </NavDropdown.Item>
                <NavDropdown.Item href={config.link4} target="_blank">
                  {config.link4Text}
                </NavDropdown.Item>
                <NavDropdown.Item href={config.link5} target="_blank">
                  {config.link5Text}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={config.link6} target="_blank">
                  {config.link6Text}
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
