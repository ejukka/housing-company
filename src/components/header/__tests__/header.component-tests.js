import React from 'react';
import Header from '../header.component';
import renderer from 'react-test-renderer';

test('Renders Header component', () => {
    const component = renderer.create(
        <Header />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
