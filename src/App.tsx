import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import Header from "./components/header/header.component";
import AboutPage from "./pages/about/about.page";
import SignIn from "./components/sign-in/sign-in.component";
import "bootstrap/dist/css/bootstrap.min.css";
import ApartmentsPage from "./pages/apartments/apartments.page";
import HistoryPage from "./pages/history/history.page";

import { Provider, useDispatch } from "react-redux";

import { checkIsUserLoggedIn } from "./redux/user.action";
import reduxStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AdminPage from "./pages/admin/admin.page";

const App = () => {
  const dispatch = useDispatch();
  dispatch(checkIsUserLoggedIn());
  const { store, persistor } = reduxStore;

  const adminConfig: any = {
    column1: `${process.env.REACT_APP_ADMIN_COLUMN1_HEADER_TEXT}`,
    column2: `${process.env.REACT_APP_ADMIN_COLUMN2_HEADER_TEXT}`,
    column3: `${process.env.REACT_APP_ADMIN_COLUMN3_HEADER_TEXT}`,
    column1_text: `${process.env.REACT_APP_ADMIN_COLUMN1_HEADER_TEXT2}`,
    column2_text: `${process.env.REACT_APP_ADMIN_COLUMN2_HEADER_TEXT2}`,
    column3_text: `${process.env.REACT_APP_ADMIN_COLUMN3_HEADER_TEXT2}`,
    list1: `${process.env.REACT_APP_ADMIN_LIST1}`,
    list1_text: `${process.env.REACT_APP_ADMIN_LIST1_TEXT}`
  };

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div>
          <Router>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/history" component={HistoryPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/apartments" component={ApartmentsPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route
              exact
              path="/admin"
              component={() => <AdminPage props={adminConfig} />}
            />
          </Router>
        </div>
      </Provider>
    </PersistGate>
  );
};

export default App;
