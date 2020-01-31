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

  const apartMentsConfig = {
    img1: `${process.env.REACT_APP_APARTMENTS_IMG1}`,
    img1_ALT: `${process.env.REACT_APP_APARTMENTS_IMG1_ALT}`,
    img1_text: `${process.env.REACT_APP_APARTMENTS_IMG1_TEXT}`,
    img2: `${process.env.REACT_APP_APARTMENTS_IMG2}`,
    img2_ALT: `${process.env.REACT_APP_APARTMENTS_IMG2_ALT}`,
    img2_text: `${process.env.REACT_APP_APARTMENTS_IMG2_TEXT}`,
    img3: `${process.env.REACT_APP_APARTMENTS_IMG3}`,
    img3_ALT: `${process.env.REACT_APP_APARTMENTS_IMG3_ALT}`,
    img3_text: `${process.env.REACT_APP_APARTMENTS_IMG3_TEXT}`
  };

  const aboutPageConfig = {
    column1: `${process.env.REACT_APP_ABOUT_COLUMN1_HEADER_TEXT}`,
    column2: `${process.env.REACT_APP_ABOUT_COLUMN2_HEADER_TEXT}`,
    column3: `${process.env.REACT_APP_ABOUT_COLUMN3_HEADER_TEXT}`,
    column1_text: `${process.env.REACT_APP_ABOUT_COLUMN1_HEADER_TEXT2}`,
    column2_text: `${process.env.REACT_APP_ABOUT_COLUMN2_HEADER_TEXT2}`,
    column3_text: `${process.env.REACT_APP_ABOUT_COLUMN3_HEADER_TEXT2}`,
    list1: `${process.env.REACT_APP_ABOUT_LIST1}`,
    list1_text: `${process.env.REACT_APP_ABOUT_LIST1_TEXT}`,
    list2: `${process.env.REACT_APP_ABOUT_LIST2}`,
    list2_text: `${process.env.REACT_APP_ABOUT_LIST2_TEXT}`,
    list3: `${process.env.REACT_APP_ABOUT_LIST3}`,
    list3_text: `${process.env.REACT_APP_ABOUT_LIST3_TEXT}`,
    list4: `${process.env.REACT_APP_ABOUT_LIST4}`,
    list4_text: `${process.env.REACT_APP_ABOUT_LIST4_TEXT}`,
    list5: `${process.env.REACT_APP_ABOUT_LIST5}`,
    list5_text: `${process.env.REACT_APP_ABOUT_LIST5_TEXT}`
  };

  const homePageConfig = {
    menuTitle1: `${process.env.REACT_APP_MENU_TITLE1}`,
    menuTitle1Link: `${process.env.REACT_APP_MENU_TITLE1_LINK}`,
    menuTitle2: `${process.env.REACT_APP_MENU_TITLE2}`,
    menuTitle2Link: `${process.env.REACT_APP_MENU_TITLE2_LINK}`
  };

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div>
          <Router>
            <Header />
            <Route
              exact
              path="/"
              component={() => <HomePage props={homePageConfig} />}
            />
            <Route exact path="/history" component={HistoryPage} />
            <Route
              exact
              path="/about"
              component={() => <AboutPage props={aboutPageConfig} />}
            />
            <Route
              exact
              path="/apartments"
              component={() => <ApartmentsPage props={apartMentsConfig} />}
            />
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
