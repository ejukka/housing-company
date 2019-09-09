import React, { Component } from "react";
import { ButtonStyles } from "./own-button.styles";

class OwnButton extends Component<any> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    let { children, ...props } = this.props;
    return <ButtonStyles {...props}>{children}</ButtonStyles>;
  }
}

export default OwnButton;
