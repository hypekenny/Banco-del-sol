/* @jest-environment jsdom */

import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { initialState } from '../../redux/reducer';
import { Register } from '../register/Register';

const middlewares: any[] = [];
const mockStore = configureStore(middlewares);

describe('Register', () => {
  it('renders the register', () => {
    const push = jest.fn();
    const mockNavigation: any = { push };
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Register navigation={mockNavigation} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
