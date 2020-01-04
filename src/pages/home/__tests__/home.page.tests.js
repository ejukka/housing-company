import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from "../home.page";

test('Renders Home page', () => {
    const component = renderer.create(
        <HomePage />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
