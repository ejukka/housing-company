import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Container } from "react-bootstrap";
import { signInStart } from "../../redux/user.action";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <br />
      <Button onClick={() => dispatch(signInStart())}>
        Kirjaudu Googlen tunnuksilla
      </Button>
    </Container>
  );
};

export default SignIn;
