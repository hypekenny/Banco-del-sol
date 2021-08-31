import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './StartStyles';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';
import { loginStackParamList } from '../../types/Types';
import { StylesCon } from '../../constants/Styles';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Start = ({ navigation }: Props) => {
  return (
    <View style={StylesCon.phone}>
      <View style={StylesCon.filler} />
      <img
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880917630180028436/Banco-del-Sol-Background_Web.png"
        alt=""
      />

      <img
        style={{
          width: 411,
          height: 813,
          position: 'absolute',
          alignSelf: 'center',
          marginLeft: '1%',
          marginRight: '1%',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880174589605478400/Mockup_-_android_-_BDS_app.png"
        alt=""
      />

      <View style={styles.container}>
        <View style={{ height: '50%' }}>
          <Image
            source={require('../../../Img-Sant/Banco-del-Sol-Logo.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.ellipse} />

        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          style={{ height: '60%' }}
        >
          <View style={styles.containerBtn}>
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
      </View>
      <View style={StylesCon.filler} />
    </View>
  );
};
