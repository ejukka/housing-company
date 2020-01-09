import React from 'react';
import HomePage from "../home.page";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { BrowserRouter } from "react-router-dom";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test('Renders Home page', () => {
    act(() => {
        ReactDOM.render(
            <BrowserRouter>
                <HomePage />,
            </BrowserRouter>,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
});
