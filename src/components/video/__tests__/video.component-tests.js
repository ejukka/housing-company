import React from 'react';
import Video from '../video-component';
import renderer from 'react-test-renderer';

test('Renders Video component', () => {
    const component = renderer.create(
        <Video />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
