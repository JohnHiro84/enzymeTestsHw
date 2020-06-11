import React from 'react';

import {shallow, mount } from 'enzyme';

import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Footer from '../Footer';


describe('<Footer /> Component tests', () => {

    it('Footer should receive props called footerProp', () => {
      let wrapper = shallow(<Footer footerProp="A little app to show basic Jest and Enzyme Tests by AY" excludedProp="notthis"/>);
      expect(wrapper.props().footerProp).toEqual("A little app to show basic Jest and Enzyme Tests by AY");

    })

    it('The h1 should read "Footer"', () => {
      let wrapper = shallow(<Footer  footerProp="A little app to show basic Jest and Enzyme Tests by AY"/>);
      expect(wrapper.find('h2').text()).toEqual("Footer");
      expect(wrapper.find('h2').text()).not.toEqual("Header");

    })

})
