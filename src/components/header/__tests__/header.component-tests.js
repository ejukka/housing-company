import React from "react";
import ReactDOM from "react-dom";
import Header from "../header.component";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import reduxStore from "../../../redux/store";
import pretty from "pretty";
import initTest from "../../../utils/testUtils"
import { container } from "../../../utils/testUtils"

initTest();

test("Renders Header component", () => {
  const store = reduxStore.store;
  act(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Header />
      </Provider>,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();

});
