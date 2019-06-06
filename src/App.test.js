import React from 'react';
import ReactDOM from 'react-dom';
import App, { Link, LinkOpt } from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const GOOGLE = 'www.google.com'

configure({
  adapter: new Adapter()
});

describe('<Link />', () => {
  it('Link component accepts address prop', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.instance().props.address).toBe(GOOGLE)
  })
  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address='www.google.com' />)
    expect(wrapper.props().href).toBe(GOOGLE)
  })
});

describe('<LinkOpt />', () => {
  it('returns null with true hide prop', () => {
    const wrapper = shallow(<LinkOpt hide={false} />)
    expect(wrapper.find('a').length).toBe(1)
    wrapper.setProps({ hide: true })
    expect(wrapper.get(0)).toBeNull()
  })
});
