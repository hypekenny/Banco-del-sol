import React from 'react';
import { View, Text } from 'react-native';

export const Card = ({ date, type, value, styles }) => (
  <View style={styles.box}>
    <Text style={styles.texttype}>{type} </Text>
    <Text style={styles.textb}>Monto: </Text>
    <Text style={styles.text}>{value} </Text>
    <Text style={styles.textb}>Fecha: </Text>
    <Text style={styles.text}>
      {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}{' '}
    </Text>
  </View>
);
