import React from 'react';
import GoogleMap from '../google-map.component';
import renderer from 'react-test-renderer';

test('Renders GoogleMap component', () => {
    const component = renderer.create(
        <GoogleMap
            containerElement={<div style={{ height: `500px`, width: "500px" }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
