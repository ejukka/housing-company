import React from 'react';
import AdminPage from '../admin.page';
import reduxStore from "../../../redux/store";
import {act} from "react-dom/test-utils";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
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

test('Renders Admin page', () => {
    // const component = renderer.create(
    //     <AdminPage />
    // );
    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    const store = reduxStore.store;
    act(() => {
        ReactDOM.render(
            <Provider store={store}>
                <AdminPage />
            </Provider>,
            container
        );
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
});
