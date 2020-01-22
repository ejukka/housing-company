import App from "./App";
import { act } from "react-dom/test-utils";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";
import pretty from "pretty";

let container: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("renders without crashing", () => {
  const store = reduxStore.store;
  act(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
