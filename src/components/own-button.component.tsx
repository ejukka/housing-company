import React, { Component } from "react";

class OwnButton extends Component<{ children: any }> {
  render() {
    let { children, ...props } = this.props;
    return <div {...props}>{children}</div>;
  }
}

export default OwnButton;
