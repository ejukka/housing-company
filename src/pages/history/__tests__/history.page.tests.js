import React from 'react';
import HistoryPage from '../history.page';
import renderer from 'react-test-renderer';

test('Renders History page', () => {
    const component = renderer.create(
        <HistoryPage />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
