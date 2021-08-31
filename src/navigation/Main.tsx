import React from 'react';
import firebase from 'firebase/app';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { firebaseConfig } from '../constants/firebase.config';
import { loginStackParamList } from '../types/Types';
import { config } from '../screens/index';
import { HomeTab } from '../screens/homeTab/HomeTab';
import { Statistics } from '../screens/statistics/Statistics';

firebase.initializeApp(firebaseConfig);

const {
  Start,
  Login,
  Register,
  Transfer,
  AddFunds,
  Account,
  AccountEdit,
  Transactions,
  ForgotPassword,
  LoadingFull,
  ContactAdd,
  Contact,
  ContactDetails,
  Error,
} = config;

const LoginStack = createStackNavigator<loginStackParamList>();

export const Main = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="StartView"
      component={Start}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{ headerTitle: 'Ingresar', headerShown: false }}
    />

    <LoginStack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="HomeTab"
      component={HomeTab}
      options={{
        headerTitle: 'Inicio',
        headerShown: false,
      }}
    />
    <LoginStack.Screen
      name="Account"
      component={Account}
      options={{
        headerTitle: 'Inicio',
        headerTintColor: 'white',
        headerBackground: () => (
          <LinearGradient
            colors={['#ff4b6e', '#ff9349']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        ),
      }}
    />
    <LoginStack.Screen
      name="AddFunds"
      component={AddFunds}
      options={{
        headerTitle: 'Inicio',
        headerTintColor: 'white',
        headerShown: false,
        headerBackground: () => (
          <LinearGradient
            colors={['#ff4b6e', '#ff9349']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        ),
      }}
    />
    <LoginStack.Screen
      name="Transfer"
      component={Transfer}
      options={{
        headerShown: false,
      }}
    />
    <LoginStack.Screen
      name="Transactions"
      component={Transactions}
      options={{
        headerTitle: 'Hola {Name}',
        headerShown: true,

        headerTintColor: 'white',
        headerBackground: () => (
          <LinearGradient
            colors={['#ff4b6e', '#ff9349']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        ),
      }}
    />
    <LoginStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{
        headerShown: false,
        headerTitle: 'Cambia tu contraseña',
        headerBackground: () => (
          <LinearGradient
            colors={['#ff4b6e', '#ff9349']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        ),
        headerTintColor: 'white',
      }}
    />

    <LoginStack.Screen
      name="LoadingFull"
      component={LoadingFull}
      options={{ headerShown: false }}
    />

    <LoginStack.Screen
      name="ContactAdd"
      component={ContactAdd}
      options={{ headerShown: false }}
    />

    <LoginStack.Screen
      name="Contact"
      component={Contact}
      options={{ headerShown: false }}
    />

    <LoginStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={{
        headerShown: false,
        headerTitle: 'Contacto',
        headerTintColor: 'white',
        headerBackground: () => (
          <LinearGradient
            colors={['#ff4b6e', '#ff9349']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        ),
      }}
    />

    <LoginStack.Screen
      name="AccountEdit"
      component={AccountEdit}
      options={{
        headerTitle: 'Cambiar datos',
        headerTintColor: 'white',
        headerBackground: () => (
          <LinearGradient
            colors={['#ff4b6e', '#ff9349']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        ),
      }}
    />
    <LoginStack.Screen
      name="Error"
      component={Error}
      options={{ headerShown: false }}
    />
    <LoginStack.Screen
      name="Statistics"
      component={Statistics}
      options={{ headerShown: false }}
    />
  </LoginStack.Navigator>
);
