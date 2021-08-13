/* eslint-disable prefer-const */
// feat-Cell-phone-compatibility

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, LogBox } from 'react-native';
import { ThemeProvider, Button, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './HomeStyles';
import { Transactions } from '../transacciones/Transactions';
import { logout } from '../../redux/actions';
import { Props, RootState } from '../../types/Types';
import { Account } from '../account/Account';
import { Statistics } from '../statistics/Statistics';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

const theme = {
  Button: {
    containerStyle: [
      {
        marginRight: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        backgroundColor: 'white',
      },
    ],
    titleStyle: {
      color: 'black',
    },
  },
};

function HomeScreen({ navigation }: Props) {
  const [ing, setIng] = useState<string>('0');
  const [gast, setGast] = useState<string>('0');

  const accountStore = useSelector((state: RootState) => state.account);

  useEffect(() => {
    setIng(5750);
    setGast(3100.5);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.view1}>
        <Text style={{ fontSize: 20, fontWeight: '100', color: '#3b3b3b' }}>
          Balance
        </Text>
        <Text style={{ fontSize: 40, fontWeight: '900' }}>
          ${accountStore.balance.amount}
        </Text>
      </View>
      <View style={styles.box}>
        <View style={styles.boxt}>
          <Text style={styles.textGeneral}>General</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <Text style={styles.text}>Ingresos</Text>
            <Text style={styles.text}>Gastos</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.textNum}>${ing}</Text>
            <Text style={styles.textNum}>${gast}</Text>
          </View>
        </View>
      </View>

      <View style={styles.view3}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.push('AddFunds')}
            style={styles.bottonRecargar}
          >
            <Ionicons style={styles.styleIcon} name="add-circle" size={28} />
            <Text style={styles.bottonTextR}>Recargar Dinero</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.push('Transfer')}
            style={styles.bottonEnviar}
          >
            <Ionicons style={styles.styleIcon1} name="send" size={28} />
            <Text style={styles.bottonTextE}>Enviar Dinero</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
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
    case 'Mi Cuenta':
      iconName = 'bank';
      break;
    default:
      iconName = '';
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={27} color={color} />
  );
};

export const Home = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const userStore = useSelector((state: RootState) => state.user);

  function exit() {
    dispatch(logout());
    navigation.popToTop();
  }

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
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          headerBackground: () => (
            <LinearGradient
              colors={['#ff4b6e', '#ff9349']}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          ),
          headerTintColor: '#fff',
          headerTitle: `Hola ${userStore.name}`,
          headerShown: true,
          headerRight: () => (
            <ThemeProvider theme={theme}>
              <Button
                onPress={() => exit()}
                title="Cerrar Sesion"
                type="clear"
              />
            </ThemeProvider>
          ),
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
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          ),
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
      <Tab.Screen
        name="Mi Cuenta"
        component={Account}
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
