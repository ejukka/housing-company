import React from 'react';
import AdminPage from '../admin.page';
import reduxStore from "../../../redux/store";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import pretty from "pretty";
import initTest from "../../../utils/testUtils";
import { container } from "../../../utils/testUtils";
import {adminConfig} from "../../../utils/config";

initTest();

test('Renders Admin page', () => {
    const store = reduxStore.store;
    act(() => {
        ReactDOM.render(
            <Provider store={store}>
                <AdminPage props={adminConfig}/>
            </Provider>,
            container
        );
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
});
