import React from 'react';
import AboutPage from '../about.page';
import renderer from 'react-test-renderer';
import {aboutPageConfig} from "../../../utils/config";

test('Renders About page', () => {
    const component = renderer.create(
        <AboutPage props={aboutPageConfig}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
