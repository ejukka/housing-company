import React from "react";
import OwnButton from "./own-button.component";
import { Form, FormControl, InputGroup } from "react-bootstrap";

class SignIn extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <FormControl
              placeholder="password"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <OwnButton>Sign in with Google </OwnButton>
      </div>
    );
  }
}

export default SignIn;
