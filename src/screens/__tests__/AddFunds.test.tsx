/* @jest-environment jsdom */

import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { initialState } from '../../redux/reducer';
import { AddFunds } from '../addFunds/AddFunds';

const middlewares: any[] = [];
const mockStore = configureStore(middlewares);

describe('AddFunds', () => {
  it('renders the addFunds', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <AddFunds />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
