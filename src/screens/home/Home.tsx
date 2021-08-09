/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ThemeProvider, Button, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './HomeStyles';
import { Start } from '../start/Start';
import { Register } from '../register/Register';
import { Login } from '../login/Login';
import { AddFunds } from '../addFunds/AddFunds';
import colors from '../../constants/colors';

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

function recargarDinero() {
  console.log('recargaste dinero');
}

function enviarDinero() {
  console.log('enviaste dinero');
}

function HomeScreen() {
  const [balance, setBalance] = useState<number>(0);

  const [ing, setIng] = useState<number>(0);

  const [gast, setGast] = useState<number>(0);

  useEffect(() => {
    setBalance(500);
    setIng(12);
    setGast(12);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.view1}>
        <Text style={{ fontSize: 40 }}>Balance</Text>
        <Text style={{ fontSize: 30 }}>${balance}</Text>
      </View>

      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.container2}
      >
        <View>
          <Text style={styles.textGeneral}>General</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <Text style={styles.text}>Ingresos</Text>
            <Text style={styles.text}>Gastos</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text}>${ing}</Text>
            <Text style={styles.text}>${gast}</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.view3}>
        <View>
          <TouchableOpacity
            onPress={recargarDinero}
            style={styles.bottonRecargar}
          >
            <Ionicons style={styles.styleIcon} name="add-circle" size={28} />
            <Text style={styles.bottonTextR}>Recargar Dinero</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={enviarDinero} style={styles.bottonEnviar}>
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
    case 'Home':
      iconName = 'home';
      break;
    case 'Start':
      iconName = 'star-face';
      break;
    case 'Register':
      iconName = 'account-edit';
      break;
    case 'Login':
      iconName = 'account-check';
      break;
    case 'Estadisticas':
      iconName = 'cards-heart';
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={25} color={color} />
  );
};
// const [name, setName] = useState<string>('');
// setName('Seba');
export const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screensOptions(route, color),
        tabBarActiveTintColor: '#ff4b6e',
        tabBarInactiveTintColor: '#ff9349',
      })}
    >
      <Tab.Screen
        name="Home"
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
          headerTitle: `Hola Marcos`,
          headerShown: true,
          headerRight: () => (
            <ThemeProvider theme={theme}>
              <Button
                onPress={() => alert('This is a button!')}
                title="mi cuenta"
                type="clear"
              />
            </ThemeProvider>
          ),
        }}
      />
      <Tab.Screen name="Start" component={Start} />
      <Tab.Screen name="Register" component={Register} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Estadisticas" component={AddFunds} />
    </Tab.Navigator>
  );
};
