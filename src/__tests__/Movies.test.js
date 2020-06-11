import React from 'react';
import {shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Movies from '../Movies';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('< Movies /> tests', () => {

  it(' < Movies /> initial movie on page load should be "The Journey to West Palm Dale"', () => {

    let wrapper = shallow(<Movies />);

    let initialTitle = wrapper.find('li').at(0);
    let initialGenre = wrapper.find('li').at(3);

    expect(initialTitle.text()).toBe("The Journey to West Palm Dale");
    expect(initialTitle.text()).not.toBe("The Cool Cat");
    expect(initialGenre.text()).toBe("comedy");

  })

  it('The state.movieId should be initially set to 0', () =>{
    let wrapper = shallow(<Movies />);
    expect(wrapper.state('movieId')).toBe(0);
  })

  it('clicking "View next movie" button should change the movieId in state', () => {

    let wrapper = shallow(<Movies />);

    expect(wrapper.state('movieId')).toBe(0);
    expect(wrapper.state('movieId')).not.toBe(1);

    wrapper.find('button').simulate('click');
    expect(wrapper.state('movieId')).toBe(1);

  })
  it('clicking "View next movie button" when movieId is 6 should change the movieId to 0"', () => {

    let wrapper = shallow(<Movies />);

    wrapper.setState({ movieId: 6})
    expect(wrapper.state('movieId')).toBe(6);

    wrapper.find('button').simulate('click');

    expect(wrapper.state('movieId')).toBe(0);
    expect(wrapper.state('movieId')).not.toBe(6);

  })
})
