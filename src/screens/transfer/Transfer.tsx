import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './TransferStyles';
import { RootState } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { addFunds } from '../../redux/actions';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';

export const Transfer = () => {
  const accountStore = useSelector((state: RootState) => state.account);
  const userStore = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();
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
      <View style={ButtonSecondaryStyle.button}>
        <Text style={ButtonSecondaryStyle.text}>
          ${accountStore.balance.amount}
        </Text>
      </View>
      <TextInput
        placeholder="Ingresá monto..."
        placeholderTextColor="grey"
        value={data.amount.toString()}
        onChangeText={(text: string) => {
          if (text === '') setData({ ...data, amount: 0 });
          else if (parseInt(text, 10) <= accountStore.balance.amount)
            setData({ ...data, amount: parseInt(text, 10) });
        }}
        keyboardType="number-pad"
        style={styles.inputEmail}
      />
      <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <TouchableOpacity
          style={ButtonPrimaryStyle.button}
          onPress={() =>
            addFunds(
              userStore.email.toLowerCase(),
              data.email.toLowerCase(),
              'Transfer',
              data.amount,
              token,
              dispatch,
            )
          }
        >
          <Text style={ButtonSecondaryStyle.text}>enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
