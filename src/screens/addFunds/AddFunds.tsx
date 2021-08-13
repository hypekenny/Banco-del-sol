import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './AddFundsStyles';
import { updateBalance } from '../../redux/actions';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { Props, RootState } from '../../types/Types';

export const AddFunds = ({ navigation }: Props) => {
  const token = useSelector((state: RootState) => state.token);
  const userStore = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleInputChange = (text: string) => {
    text.replace(/[^0-9]/g, '');
    if (text === '') setValue(0);
    else setValue(parseInt(text, 10));
  };

  const handleSubmit = () => {
    updateBalance(
      userStore.email,
      userStore.email,
      'Recarga',
      value,
      token,
      dispatch,
    );
    setValue(0);
    navigation.push('Home');
  };

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Text>Ingresa el monto a recargar: </Text>
      </View>
      <TextInput
        placeholderTextColor="grey"
        value={value.toString()}
        onChangeText={handleInputChange}
        keyboardType="number-pad"
        style={ButtonPrimaryStyle.input}
      />

      <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <TouchableOpacity
          style={ButtonSecondaryStyle.button}
          onPress={handleSubmit}
        >
          <Text style={ButtonSecondaryStyle.text}>Cargar Dinero</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
