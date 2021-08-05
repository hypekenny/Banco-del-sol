/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './HomeStyle';

import { Start } from '../start/Start';
import { Register } from '../register/Register';
import { Login } from '../login/Login';
import { AddFunds } from '../addFunds/AddFunds';

const Tab = createBottomTabNavigator();

// const [balance, setBalance] = useState<number | undefined>(undefined);
// eslint-disable-next-line react-hooks/rules-of-hooks
// eslint-disable-next-line prefer-const

// let ing: number = 123;
// let gast: number = 123123;
// eslint-disable-next-line no-unused-vars
// let bal: number = 123123;

function HomeScreen() {
  const [balance, setBalance] = useState<number>(0);
  const [ing, setIng] = useState<number>(0);

  const [gast, setGast] = useState<number>(0);

  const [bal, setBal] = useState<number>(0);

  useEffect(() => {
    setBalance(12);
    setIng(12);
    setGast(12);
    setBal(12);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Balance</Text>
      <Text>${balance}</Text>

      <View style={styles.view}>
        <Text>General</Text>
        <Text>Ingresos</Text>
        <Text>${ing}</Text>
        <Text>Balance</Text>
        <Text>${bal}</Text>
        <Text>Gastos</Text>
        <Text>${gast}</Text>
      </View>
    </View>
  );
}

// const [name, setName] = useState<string>('');
// setName('Seba');
export const Home = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="User"
      component={HomeScreen}
      options={{ headerTitle: `Hola {name}`, headerShown: true }}
    />
    <Tab.Screen name="Home" component={Start} />
    <Tab.Screen name="Register" component={Register} />
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="Estadisticas" component={AddFunds} />
  </Tab.Navigator>
);
