import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './AccountStyles';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import colors from '../../constants/colors';

export function Account() {
  useEffect(() => {
    console.log('traigo de redux los datos del User');
  }, []);

  function asociateCVU() {
    alert('CVU asociado');
  }

  function shareCVU() {
    alert('CVU copiado al portapapeles');
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.container2}
      >
        <View>
          <View style={styles.block}>
            <Text>CVU</Text>
            <Text>00000526789452134567</Text>
          </View>
          <View style={styles.block}>
            <Text>Nombre del Banco</Text>
            <Text>Banco del Sol</Text>
          </View>
          <View style={styles.block}>
            <Text>Nombre del Titular</Text>
            <Text>usuario loggeado</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={ButtonPrimaryStyle.button}
          onPress={() => asociateCVU()}
        >
          <View style={styles.ImageAndButton}>
            <MaterialIcons
              name="sync"
              size={32}
              color={colors.primary}
              style={{ paddingLeft: 5, paddingRight: 5 }}
            />
            <Text style={ButtonPrimaryStyle.text}>Asociar CVU</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={ButtonSecondaryStyle.button}
          onPress={() => shareCVU()}
        >
          <View style={styles.ImageAndButton}>
            <MaterialIcons
              name="share"
              size={32}
              color="white"
              style={{ paddingLeft: 5, paddingRight: 5 }}
            />
            <Text style={ButtonSecondaryStyle.text}>Compartir CVU</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
