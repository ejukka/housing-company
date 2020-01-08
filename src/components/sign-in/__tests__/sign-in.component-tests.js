import React from 'react';
import SignIn from '../sign-in.component';
import renderer from 'react-test-renderer';

test('Renders SignIn component', () => {
    const component = renderer.create(
        <SignIn />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
