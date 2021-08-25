import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Props } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import { styles } from './ErrorStyles';
import colors from '../../constants/colors';

export const Error = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Ha ocurrido un error</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={navigation.push('HomeTab')}
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
