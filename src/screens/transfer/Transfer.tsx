import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './TransferStyles';
import { RootState } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { addFunds } from '../../redux/actions';
import colors from '../../constants/colors';

export const Transfer = () => {
  const accountStore = useSelector((state: RootState) => state.account);
  const userStore = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    amount: 0,
    comment: '',
  });
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ingresá email..."
        placeholderTextColor="grey"
        value={data.email}
        onChangeText={(text: string) => setData({ ...data, email: text })}
        keyboardType="email-address"
        style={ButtonPrimaryStyle.input}
      />
      <TextInput
        value={`$${data.amount.toString()}`}
        onChangeText={(text: string) => {
          if (text.substring(1, text.length) === '')
            setData({ ...data, amount: 0 });
          else if (parseInt(text, 10) <= accountStore.balance.amount)
            setData({
              ...data,
              amount: parseInt(text.substring(1, text.length), 10),
            });
        }}
        keyboardType="number-pad"
        style={ButtonPrimaryStyle.amountInput}
      />
      <TextInput
        placeholder="Queres dejar un comentario?..."
        placeholderTextColor="grey"
        value={data.comment}
        onChangeText={(text: string) => setData({ ...data, comment: text })}
        style={ButtonPrimaryStyle.input}
      />
      <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <TouchableOpacity
          onPress={() =>
            addFunds(
              userStore.email.toLowerCase(),
              data.email.toLowerCase(),
              'Transfer',
              data.amount,
              data.comment,
              token,
              dispatch,
            )
          }
        >
          <LinearGradient
            style={ButtonPrimaryStyle.button}
            colors={[colors.primary, colors.secondary]}
          >
            <Text style={ButtonPrimaryStyle.whiteText}>ENVIAR</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
