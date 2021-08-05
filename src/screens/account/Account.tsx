import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './AccountStyles';

function asociateCVU() {}

function shareCVU() {}

export const Account = () => (
  <View style={styles.container}>
    <View style={styles.container2}>
      <View style={styles.cvu}>
        <Text>CVU</Text>
        <Text>00000526789452134567</Text>
      </View>
      <View style={styles.bankName}>
        <Text>Nombre del Banco</Text>
        <Text>Banco del Sol</Text>
      </View>
      <Text>Nombre del Titular</Text>
      <Text>usuario loggeado</Text>
    </View>
    <View>
      <TouchableHighlight onPress={() => asociateCVU()}>
        <Text>Asociar CVU</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => shareCVU()}>
        <Text>Compartir CVU</Text>
      </TouchableHighlight>
    </View>
  </View>
);
