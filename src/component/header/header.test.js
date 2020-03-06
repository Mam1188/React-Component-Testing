import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByAttribute} from '../../utils';


const setupComponent = (props={}) => (shallow(<Header {...props} />));

describe('Header Component', () => {

    let component;
    beforeEach(() => {
        component = setupComponent();
    })

    it('Renders component without error', () => {
        const Wrap = findByAttribute(component, 'wrapperAttr');
        const Logo = findByAttribute(component, 'logoAttr');
        expect(Wrap.length).toBe(1);
        expect(Logo.length).toBe(1);
    })

    it('Renders logo without error', () => {
        const Logo = component.find('.logo');
        expect(Logo.length).toBe(1);
    })

})