import React from 'react';
import ApartmentsPage from '../apartments.page';
import renderer from 'react-test-renderer';
import {apartmentsConfig} from "../../../utils/config";

test('Renders Apartments page', () => {
    const component = renderer.create(
        <ApartmentsPage props={apartmentsConfig}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
