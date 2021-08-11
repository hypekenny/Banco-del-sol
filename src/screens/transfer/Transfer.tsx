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
      <TextInput
        placeholder="Ingresá email..."
        placeholderTextColor="grey"
        value={data.email}
        onChangeText={(text: string) => setData({ ...data, email: text })}
        keyboardType="email-address"
        style={styles.inputEmail}
      />
      <Text style={ButtonPrimaryStyle.text}>${accountStore.balance}</Text>
      <TextInput
        placeholder="Ingresá monto..."
        placeholderTextColor="grey"
        value={data.amount.toString()}
        onChangeText={(text: string) =>
          setData({ ...data, amount: parseInt(text, 10) })
        }
        keyboardType="number-pad"
        style={styles.inputEmail}
      />
      <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <TouchableOpacity
          style={ButtonPrimaryStyle.button}
          onPress={() => console.log('pending')}
        >
          <Text>enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
