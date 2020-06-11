import React from 'react';
import {shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Main from '../Main';
import Movies from '../Movies';
import Form from '../Form';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("<Main/> rendering", () => {

  it('<Main/>should render the main component with text "Enzyme Tests Homework"', () => {
    let wrapper = shallow(<Main />);

    expect(wrapper.find('h1').text()).toContain("Enzyme Tests Homework");
  })

  it('<Main/> should have 4 li tags "', () => {
    let wrapper = shallow(<Main />);
    expect(wrapper.find('li')).toHaveLength(4);
  })

  it('<Main/> should render <Movies />', () => {

    let wrapper = shallow(<Main />);
    // console.log(wrapper.debug())
    expect(wrapper.contains(<Movies />)).toEqual(true);

  })
  it('<Main/> should render <Form />', () => {

    let wrapper = shallow(<Main />);
    // console.log(wrapper.debug())
    expect(wrapper.contains(<Form />)).toEqual(true);

  })

})
