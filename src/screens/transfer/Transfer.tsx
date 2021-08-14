import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './TransferStyles';
import { RootState } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { addFunds, detailContact } from '../../redux/actions';

export const Transfer = () => {
  const accountStore = useSelector((state: RootState) => state.account);
  const userStore = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const ContactDetails = useSelector(state => state.DetailTransfer);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    amount: 0,
  });
  useEffect(() => {
    {
      ContactDetails.email
        ? setData({ ...data, email: ContactDetails.email })
        : null;
    }
  }, []);

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
      <Text style={ButtonPrimaryStyle.text}>
        ${accountStore.balance.amount}
      </Text>
      <TextInput
        placeholder="Ingresá monto..."
        placeholderTextColor="grey"
        value={data.amount.toString()}
        onChangeText={(text: string) =>
          parseInt(text, 10) <= accountStore.balance.amount
            ? setData({ ...data, amount: parseInt(text, 10) })
            : null
        }
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
          <Text>enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
