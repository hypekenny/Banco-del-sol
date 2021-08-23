import { TouchableOpacity } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Error } from '../error/Error';

describe('Error', () => {
  it('renders the errors', () => {
    const push = jest.fn();
    const mockNavigation: any = { push };
    const wrapper = shallow(<Error navigation={mockNavigation} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls push when button clicked', () => {
    const push = jest.fn();
    const mockNavigation: any = { push };
    const wrapper = shallow(<Error navigation={mockNavigation} />);
    wrapper.find(TouchableOpacity).first().prop<() => void>('onPress')();
    expect(push).toHaveBeenCalledWith('Login');
  });
});
