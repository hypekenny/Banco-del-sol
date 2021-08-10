import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './AddFundsStyles';
import { updateBalance } from '../../redux/actions';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';

export const AddFunds = () => {
  const [value, setValue] = useState(0);

  const handleInputChange = (text: string) => {
    text.replace(/[^0-9]/g, '');
    if (text === '') setValue(0);
    else setValue(parseInt(text, 10));
  };

  const handleSubmit = () => {
    updateBalance(value);
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
