import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Container } from "react-bootstrap";

class SignIn extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <Container>
        <br />
        <Button>Kirjaudu Googlen tunnuksilla</Button>
      </Container>
    );
  }
}

export default SignIn;
