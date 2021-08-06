import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './AccountStyles';

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
      <View style={styles.container2}>
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
      <View style={styles.buttonsContainer}>
        <TouchableHighlight style={styles.button} onPress={() => asociateCVU()}>
          <Text>Asociar CVU</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => shareCVU()}>
          <Text>Compartir CVU</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
