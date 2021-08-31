import { TouchableOpacity } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { Start } from '../start/Start';

describe('StartView', () => {
  it('renders the startView', () => {
    const push = jest.fn();
    const mockNavigation: any = { push };
    const wrapper = shallow(<Start navigation={mockNavigation} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls push when first button clicked', () => {
    const push = jest.fn();
    const mockNavigation: any = { push };
    const wrapper = shallow(<Start navigation={mockNavigation} />);
    wrapper.find(TouchableOpacity).first().prop<() => void>('onPress')();
    expect(push).toHaveBeenCalledWith('Register');
  });

  it('calls push when last button clicked', () => {
    const push = jest.fn();
    const mockNavigation: any = { push };
    const wrapper = shallow(<Start navigation={mockNavigation} />);
    wrapper.find(TouchableOpacity).last().prop<() => void>('onPress')();
    expect(push).toHaveBeenCalledWith('Login');
  });
});
