/* eslint-disable prefer-const */
// feat-Cell-phone-compatibility

import React from 'react';
import { LogBox } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { Transactions } from '../transacciones/Transactions';
import { Statistics } from '../statistics/Statistics';
import { Home } from './homeScreens/Home';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

const screensOptions = (route: any, color: string) => {
  let iconName;
  switch (route.name) {
    case 'Inicio':
      iconName = 'home';
      break;
    case 'Transacciones':
      iconName = 'swap-horizontal-bold';
      break;
    case 'Estadisticas':
      iconName = 'trending-up';
      break;
    default:
      iconName = '';
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={27} color={color} />
  );
};

export const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screensOptions(route, color),
        tabBarActiveTintColor: '#ff4b6e',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'white',
        tabBarBackground: () => (
          <LinearGradient
            colors={['#ff4b6e', '#ff9349']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          />
        ),

        // tabBarBadgeStyle
        tabBarStyle: {
          width: 411,
          height: 48,
          alignSelf: 'center',
          marginTop: '-15%',
          marginBottom: '15%',
          // borderBottomLeftRadius: 20,
          // borderBottomRigthRadius: 20,
        },
        // headerStyle: {},
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Transacciones"
        component={Transactions}
        options={{
          headerTintColor: 'white',
          headerBackground: () => (
            <LinearGradient
              colors={['#ff4b6e', '#ff9349']}
              style={{ flex: 1, width: 411, alignSelf: 'center' }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          ),
          headerTitleStyle: {
            backgroundColor: '#000',
            // width:;
          },
        }}
      />
      <Tab.Screen
        name="Estadisticas"
        component={Statistics}
        options={{
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
    </Tab.Navigator>
  );
};
