import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
    <View style={StylesCon.phone}>
      <View style={StylesCon.filler} />
      <View style={styles.container}>
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
