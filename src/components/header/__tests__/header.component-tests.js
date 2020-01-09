import React from "react";
import ReactDOM from "react-dom";
import Header from "../header.component";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import reduxStore from "../../../redux/store";
import pretty from "pretty";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("Renders SignIn component", () => {
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
