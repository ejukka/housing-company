import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { signInStart } from "../redux/user.action";

class SignIn extends React.Component<{ signInStart: any }> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { signInStart } = this.props;
    return (
      <Container>
        <br />
        <Button onClick={signInStart}>Kirjaudu Googlen tunnuksilla</Button>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  signInStart: () => dispatch(signInStart())
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
