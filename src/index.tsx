import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../src/screens/error/ErrorStyles';
import colors from '../src/constants/colors';
import store from './redux/store';
import { Main } from './navigation/Main';
import { ButtonPrimaryStyle } from './constants/ButtonPrimaryStyle';
import { ButtonSecondaryStyle } from '../src/constants/ButtonSecondaryStyle';

const ErrorFallback = ({ resetErrorBoundary }) => {
  return (
    <View style={styles.container}>
      <View style={styles.text1}>
        <Text style={styles.text2}>Lo sentimos, ocurrio un error!</Text>
        <Text style={styles.text2}>Por favor intente luego</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={resetErrorBoundary}
          style={ButtonPrimaryStyle.button}
        >
          <Text style={ButtonSecondaryStyle.text}>Volver</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        style={styles.ellipse}
        colors={[colors.primary, colors.secondary]}
        end={[1, 1]}
      />
    </View>
  );
};

export default function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </Provider>
      </ErrorBoundary>
    </>
  );
}
