import React from "react";
import OwnButton from "./own-button.component";

class SignIn extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  //googleSignInStart

  render() {
    return (
      <div className="sign-in">
        <div>this is signin component</div>
        <OwnButton onClick={alert("test")}>Sign in with Google </OwnButton>
      </div>
    );
  }
}

export default SignIn;
