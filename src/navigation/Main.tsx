import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import { List } from '../screens/List';
import {
  Start,
  Login,
  RegisterStep1,
  RegisterStep2,
  Home,
  Account,
  AddFunds,
  Transfer,
} from '../screens/Demos';
import { loginStackParamList } from '../types/Types';

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
      component={RegisterStep1}
      options={{ headerTitle: 'RegisterStep1' }}
    />
    <LoginStack.Screen
      name="RegisterStep2"
      component={RegisterStep2}
      options={{ headerTitle: 'RegisterStep2' }}
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
