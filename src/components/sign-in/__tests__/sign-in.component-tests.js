import React from "react";
import ReactDOM from "react-dom";
import SignIn from "../sign-in.component";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import reduxStore from "../../../redux/store";
import pretty from "pretty";
import initTest from "../../../utils/testUtils"
import { container } from "../../../utils/testUtils"

initTest();

test("Renders SignIn component", () => {
  const store = reduxStore.store;
  act(() => {
    ReactDOM.render(
        <Provider store={store}>
          <SignIn />
        </Provider>,
        container
    );
  });
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
