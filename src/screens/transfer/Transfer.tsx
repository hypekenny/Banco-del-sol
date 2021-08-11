import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './TransferStyles';
import { RootState } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';

export const Transfer = () => {
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
      <Text style={ButtonPrimaryStyle.text}>${accountStore.balance}</Text>
      <TextInput
        placeholder="Ingresá email"
        placeholderTextColor="black"
        value={data.email}
        onChangeText={(text: string) => setData({ ...data, email: text })}
        keyboardType="email-address"
        style={styles.inputEmail}
      />
      <TouchableOpacity
        style={ButtonPrimaryStyle.button}
        onPress={() => console.log('pending')}
      >
        <Text>enviar</Text>
      </TouchableOpacity>
    </View>
  );
};
