import React from 'react';


import {shallow, mount } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from '../Form';

configure({ adapter: new Adapter() });

describe('<Form /> interactions', () => {

  it('should have 2 input fields', () => {

    let wrapper = mount(<Form />);

    expect(wrapper.find('input').length).toBe(2)


  })


  // it('should grab initial value of first name input and simulate onChange event', () => {
  //
  //   const testState = { first: ""};
  //
  //   const wrapper = shallow((
  //     <input
  //       value={testState.first}
  //       onChange={ (e) => {
  //         testState[e.target.name] = e.target.value;
  //       }}
  //     />
  //
  //   ));
  //
  //     expect(wrapper.find('input').at(0).prop('value')).toEqual("");
  //     wrapper.find('input').at(0).simulate('change', { target: { name: 'first', value: "bill"}});
  //     expect(testState.first).toEqual('bill');
  // })
  //
  // it('should grab initial value of last name input and simulate onChange event', () => {
  //
  //   const testState = { last: ""};
  //
  //   const wrapper = shallow((
  //     <input
  //       value={testState.last}
  //       onChange={ (e) => {
  //         testState[e.target.name] = e.target.value;
  //       }}
  //     />
  //
  //   ));
  //
  //     expect(wrapper.find('input').at(0).prop('value')).toEqual("");
  //     wrapper.find('input').at(0).simulate('change', { target: { name: 'last', value: "paterson"}});
  //     expect(testState.last).toEqual('paterson');
  // })




  it('form input fields should update state as well as submit button', () => {

    const testState = { last: ""};

    const wrapper = shallow(<Form />);
    let prevented = false;

      wrapper.find('#first').simulate('change', { target: { name: 'first', value: "bill"}});
      expect(wrapper.state('first')).toEqual('bill');

      wrapper.find('#last').simulate('change', { target: { name: 'last', value: "paterson"}});
      expect(wrapper.state('last')).toEqual('paterson');

      wrapper.find('#submit').simulate('click', {

        preventDefault: () => {
          prevented = true;
        }
      })

      expect(prevented).toBe(true);

      expect(wrapper.state('submittedValue')).toEqual("bill paterson");

  })

});
