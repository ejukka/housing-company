import React, { Component } from "react";
import { Button } from "react-bootstrap";

//TODO: refactor or remove...
class OwnButton extends Component<any> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    let { children, ...props } = this.props;
    return (
      <Button variant="outline-secondary" {...props}>
        {children}
      </Button>
    );
  }
}

export default OwnButton;
