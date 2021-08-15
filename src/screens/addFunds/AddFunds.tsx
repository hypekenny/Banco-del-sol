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

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'center' }}>
        <View>
          <Text style={styles.text}>
            Ingresá el monto que querés recargar en tu cuenta:{' '}
          </Text>
        </View>
        <View>
          <TextInput
            value={`$${value.toString()}`}
            onChangeText={(text: string) => {
              if (text.substring(1, text.length) === '') setValue(0);
              else setValue(parseInt(text.substring(1, text.length), 10));
            }}
            keyboardType="number-pad"
            style={styles.amountInput}
          />
        </View>
      </View>
      <View>
        {value > 0 ? (
          <View style={{ alignSelf: 'center', marginTop: '20%' }}>
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
                style={ButtonPrimaryStyle.gradientButton}
                colors={[colors.primary, colors.secondary]}
              >
                <Text style={ButtonPrimaryStyle.whiteText}>
                  CONFIRMAR RECARGA
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ alignSelf: 'center', marginTop: '20%' }}>
            <TouchableOpacity disabled>
              <LinearGradient
                style={ButtonPrimaryStyle.gradientButtonDisabled}
                colors={[colors.disabledPrimary, colors.disabledSecondary]}
              >
                <Text style={ButtonPrimaryStyle.whiteText}>
                  CONFIRMAR RECARGA
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
