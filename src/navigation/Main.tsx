import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { loginStackParamList } from '../types/Types';
import { config } from '../screens/index';

const { Start, Login, Register, Home, Transfer, AddFunds, Account } = config;

const LoginStack = createStackNavigator<loginStackParamList>();
// const MainStack = createStackNavigator<mainStackParamList>();mainStackParamList

export const Main = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="Start"
      component={Start}
      options={{ headerTitle: 'Start' }}
    />
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{ headerTitle: 'Login' }}
    />
    <LoginStack.Screen
      name="RegisterStep1"
      component={Register}
      options={{ headerTitle: 'RegisterStep1' }}
    />
    <LoginStack.Screen
      name="Home"
      component={Home}
      options={{ headerTitle: 'Home' }}
    />
    <LoginStack.Screen
      name="Account"
      component={Account}
      options={{ headerTitle: 'Account' }}
    />
    <LoginStack.Screen
      name="AddFunds"
      component={AddFunds}
      options={{ headerTitle: 'Account' }}
    />
    <LoginStack.Screen
      name="Transfer"
      component={Transfer}
      options={{ headerTitle: 'Account' }}
    />
  </LoginStack.Navigator>
);
