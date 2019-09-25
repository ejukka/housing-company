import React from 'react';
import HomePage from '../home.page';
import renderer from 'react-test-renderer';

test('Renders Home page', () => {
    const component = renderer.create(
        <HomePage />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
