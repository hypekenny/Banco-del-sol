import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './TransferStyles';
import { RootState, Props } from '../../types/Types';

export const Transfer = ({ navigation }: Props) => {
  const accountStore = useSelector((state: RootState) => state.account);
  const [data, setData] = useState({
    email: '',
    amount: 0,
  });
  return (
    <View style={styles.container}>
      <Text>TRANSFER</Text>
      <TextInput
        placeholder="Ingresá email"
        placeholderTextColor="black"
        value={data.email}
        onChangeText={(text: string) => setData({ ...data, email: text })}
        keyboardType="email-address"
        style={styles.inputEmail}
      />
      <Text>{accountStore.balance}</Text>
      <TextInput
        placeholder="Ingresá email"
        placeholderTextColor="black"
        value={data.email}
        onChangeText={(text: string) => setData({ ...data, email: text })}
        keyboardType="email-address"
        style={styles.inputEmail}
      />
      <TouchableOpacity onPress={() => console.log('pending')}>
        enviar
      </TouchableOpacity>
    </View>
  );
};
