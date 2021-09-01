import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { loginStackParamList, RootState } from '../../types/Types';
import { styles } from './ContactDetailsStyles';
import colors from '../../constants/colors';
import { StylesCon } from '../../constants/Styles';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const ContactDetails = ({ navigation }: Props) => {
  const details = useSelector((state: RootState) => state.DetailTransfer);

  function toTransfer() {
    navigation.push('Transfer');
  }

  return (
    <View style={styles.phone}>
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
          // zIndex: 20,
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880174589605478400/Mockup_-_android_-_BDS_app.png"
        alt=""
      />
      <View style={StylesCon.filler} />
      <View style={styles.container}>
        <View style={styles.headerOne}>
          <LinearGradient
            style={styles.header}
            colors={[colors.primary, colors.secondary]}
          />

          <View style={StylesCon.title}>
            <Text style={StylesCon.textTitle}>Detalles del contacto</Text>
          </View>

          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.push('Contact');
            }}
          >
            <AntDesign
              name="arrowleft"
              size={35}
              color="white"
              style={styles.iconArrow}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Text style={styles.textBoxName}>{details.name}</Text>
          <Text style={styles.textBoxEmail}>{details.email}</Text>
          <TouchableOpacity
            onPress={() => toTransfer()}
            style={styles.btnTransfer}
          >
            <LinearGradient
              style={styles.gradientButton}
              colors={[colors.primary, colors.secondary]}
            >
              <Text style={styles.textTransfer}>Transferir</Text>
              <MaterialCommunityIcons
                name="swap-horizontal-bold"
                size={44}
                color="white"
                style={styles.icon}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={StylesCon.filler} />
    </View>
  );
};
