import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeProvider, Button } from 'react-native-elements';
import { burgerDrawerParamList, Props, RootState } from '../types/Types';
import { HomeTab } from '../screens/homeTab/HomeTab';
import { logout } from '../redux/actions';

const Burger = createDrawerNavigator<burgerDrawerParamList>();

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

export function Drawer({ navigation }: Props) {
  const userStore = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  function exit() {
    dispatch(logout());
    navigation.popToTop();
  }

  return (
    <Burger.Navigator>
      <Burger.Screen
        name="main"
        component={HomeTab}
        options={{
          headerBackground: () => (
            <LinearGradient
              colors={['#ff4b6e', '#ff9349']}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          ),
          headerRight: () => (
            <ThemeProvider theme={theme}>
              <Button
                onPress={() => exit()}
                title="Cerrar Sesion"
                type="clear"
              />
            </ThemeProvider>
          ),
          headerTintColor: '#fff',
          headerTitle: `Hola ${userStore.name}`,
          headerShown: true,
        }}
      />
    </Burger.Navigator>
  );
}
