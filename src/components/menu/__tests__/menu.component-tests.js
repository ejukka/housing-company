import React from 'react';
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Header from "../../header/header.component";
import { Provider} from "react-redux";
import reduxStore from "../../../redux/store";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test('Renders Header component', () => {
    const store = reduxStore.store;
    act(() => {
        ReactDOM.render(
            <Provider store={store}>
                <Header />,
            </Provider>,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
});
