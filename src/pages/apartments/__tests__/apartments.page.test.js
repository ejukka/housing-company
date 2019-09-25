import React from 'react';
import ApartmentsPage from '../apartments.page';
import renderer from 'react-test-renderer';

test('Renders Apartments page', () => {
    const component = renderer.create(
        <ApartmentsPage />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
