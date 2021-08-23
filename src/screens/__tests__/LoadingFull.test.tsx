import React from 'react';
import { shallow } from 'enzyme';
import { LoadingFull } from '../loading2/LoadingFull';

describe('Loading', () => {
  it('renders the loading', () => {
    const wrapper = shallow(<LoadingFull />);
    expect(wrapper).toMatchSnapshot();
  });
});
