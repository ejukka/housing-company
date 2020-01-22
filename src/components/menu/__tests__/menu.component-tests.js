import React from 'react';
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import Menu from "../../menu/menu.component";
import { Provider} from "react-redux";
import reduxStore from "../../../redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import initTest from "../../../utils/testUtils"
import { container } from "../../../utils/testUtils"

initTest();

test('Renders Header component', () => {
    const store = reduxStore.store;
    act(() => {
        ReactDOM.render(
            <Provider store={store}>
                <Router>
                    <Menu  title="test title"
                           imageUrl="link"
                           size="400"
                           history="" />
                </Router>
            </Provider>,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
});
