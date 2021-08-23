/* @jest-environment jsdom */

import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { initialState } from '../../redux/reducer';
import { Login } from '../login/Login';

const middlewares: any[] = [];
const mockStore = configureStore(middlewares);

describe('Login', () => {
  it('renders the login', () => {
    const push = jest.fn();
    const mockNavigation: any = { push };
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Login navigation={mockNavigation} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
