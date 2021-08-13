import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import ErrorBoundary from './components/ErrorBoundaries';

import { Main } from './navigation/Main';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <ErrorBoundary>
            <Main />
          </ErrorBoundary>
        </NavigationContainer>
      </Provider>
    </>
  );
}
