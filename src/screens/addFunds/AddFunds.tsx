import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './AddFundsStyles';
import { addFunds } from '../../redux/actions';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { RootState } from '../../types/Types';
import colors from '../../constants/colors';

export const AddFunds = () => {
  const userStore = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleInputChange = (text: string) => {
    text.replace(/[^0-9]/g, '');
    if (text === '') setValue(0);
    else setValue(parseInt(text, 10));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Text>Ingresa el monto a recargar: </Text>
      </View>
      <View style={ButtonPrimaryStyle.input}>
        <TextInput
          placeholderTextColor="grey"
          value={value.toString()}
          onChangeText={handleInputChange}
          keyboardType="number-pad"
        />
      </View>

      <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <TouchableOpacity
          onPress={() => {
            addFunds(
              userStore.email.toLowerCase(),
              userStore.email.toLowerCase(),
              'Recarga',
              value,
              '',
              token,
              dispatch,
            );
            setValue(0);
          }}
        >
          <LinearGradient
            style={ButtonPrimaryStyle.button}
            colors={[colors.primary, colors.secondary]}
          >
            <Text style={ButtonPrimaryStyle.whiteText}>CONFIRMAR RECARGA</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
