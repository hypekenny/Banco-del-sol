import React from 'react';
import firebase from 'firebase/app';
import { createStackNavigator } from '@react-navigation/stack';
import { firebaseConfig } from '../constants/firebase.config';
import { loginStackParamList } from '../types/Types';
import { config } from '../screens/index';

firebase.initializeApp(firebaseConfig);

const {
  Start,
  Login,
  Register,
  Home,
  Transfer,
  AddFunds,
  Account,
  Transactions,
  ForgotPassword,
} = config;

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
      name="Register"
      component={Register}
      options={{ headerTitle: 'Register' }}
    />
    <LoginStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: 'Home',
        headerShown: false,
      }}
    />
    <LoginStack.Screen
      name="Account"
      component={Account}
      options={{ headerTitle: 'Mi Cuenta' }}
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
    <LoginStack.Screen
      name="Transactions"
      component={Transactions}
      options={{
        headerTitle: 'Hola {Name}',
        headerShown: true,
      }}
    />
    <LoginStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ headerTitle: 'Cambia tu contraseña' }}
    />
  </LoginStack.Navigator>
);
