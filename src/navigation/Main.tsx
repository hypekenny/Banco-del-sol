import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import { Start, ButtonDemo, FormDemo } from '../screens/Demos';
import { rootStackParamList } from '../types/Types';

const MainStack = createStackNavigator<rootStackParamList>();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="List" component={List} />
    <MainStack.Screen
      name="Start"
      component={Start}
      options={{ headerTitle: 'Start' }}
    />
    <MainStack.Screen
      name="Login"
      component={FormDemo}
      options={{ headerTitle: 'Login' }}
    />
    <MainStack.Screen
      name="RegisterStep1"
      component={ButtonDemo}
      options={{ headerTitle: 'RegisterStep1' }}
    />
    <MainStack.Screen
      name="RegisterStep2"
      component={ButtonDemo}
      options={{ headerTitle: 'RegisterStep2' }}
    />
  </MainStack.Navigator>
);
