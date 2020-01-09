import React from 'react';
import AboutPage from '../about.page';
import renderer from 'react-test-renderer';

test('Renders About page', () => {
    const component = renderer.create(
        <AboutPage />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
