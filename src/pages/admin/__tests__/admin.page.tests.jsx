import React from 'react';
import AdminPage from '../admin.pagee';
import renderer from 'react-test-renderer';

test('Renders Admin page', () => {
    const component = renderer.create(
        <AdminPage />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
