import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import Header from "./components/header.component";
import AboutPage from "./pages/about/about.page";
import SignIn from "./components/sign-in.component";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/signin" component={SignIn} />
        </Router>
      </div>
    );
  }
}

export default App;
