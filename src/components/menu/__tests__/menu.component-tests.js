import React from 'react';
import Menu from '../menu.component';
import renderer from 'react-test-renderer';

test('Renders Menu component', () => {
    const component = renderer.create(
        <Menu />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
