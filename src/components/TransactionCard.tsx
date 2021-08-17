import React from 'react';
import { View, Text } from 'react-native';

export const Card = ({ date, type, value, styles, sender, receiver, user }) => (
  <View style={styles.box}>
    <Text style={styles.texttype}>{type} </Text>
    <Text style={styles.textb}>Monto: </Text>
    <Text style={styles.text}>{value} </Text>
    <Text style={styles.textb}>Fecha: </Text>
    <Text style={styles.text}>
      {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}{' '}
    </Text>
    {sender !== user && sender !== receiver && type === 'Transfer' ? (
      <Text style={styles.textb}> Recibido de: </Text>
    ) : null}
    {sender !== user && sender !== receiver && type === 'Transfer' ? (
      <Text style={styles.text}> {sender} </Text>
    ) : null}
    {sender === user && sender !== receiver && type === 'Transfer' ? (
      <Text style={styles.textb}> Enviado a: </Text>
    ) : null}
    {sender === user && sender !== receiver && type === 'Transfer' ? (
      <Text style={styles.text}> {receiver} </Text>
    ) : null}
  </View>
);
