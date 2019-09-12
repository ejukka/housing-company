import React, { Component } from "react";
import { ButtonStyles } from "./own-button.styles";
import { Button } from "react-bootstrap";

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
