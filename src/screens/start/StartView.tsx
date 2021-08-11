import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './StartViewStyles';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';
import { loginStackParamList } from '../../types/Types';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const StartView = ({ navigation }: Props) => {
  return (
    <View style={styles.containerT}>
      <LinearGradient
        // Background Linear Gradient
        colors={['white', 'white', colors.primary, colors.secondary]}
        locations={[0, 0.4, 0.4, 1]}
        style={styles.containerT}
      >
        <View style={styles.ellipse} />

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={ButtonPrimaryStyle.button}
            onPress={() => navigation.push('Register')}
          >
            <Text style={ButtonPrimaryStyle.text}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ButtonPrimaryStyle.button}
            onPress={() => navigation.push('Login')}
          >
            <Text style={ButtonPrimaryStyle.text}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <Image
        source={require('../../../Img-Sant/Banco-del-Sol-Logo.png')}
        style={styles.image}
      />
    </View>
  );
};
