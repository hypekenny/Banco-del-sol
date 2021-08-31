import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './AddFundsStyles';
import { addFunds } from '../../redux/actions';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { RootState, Props } from '../../types/Types';
import colors from '../../constants/colors';
import { StylesCon } from '../../constants/Styles';

export const AddFunds = ({ navigation }: Props) => {
  const userStore = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  return (
    <View style={StylesCon.phone}>
      <img
        style={{
          width: 411,
          height: 813,
          position: 'absolute',
          alignSelf: 'center',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880174589605478400/Mockup_-_android_-_BDS_app.png"
        alt=""
      />
      <View style={StylesCon.filler} />
      <View style={styles.container}>
        <View style={StylesCon.headerOne}>
          <LinearGradient
            style={StylesCon.header}
            colors={[colors.primary, colors.secondary]}
          />
          <View style={StylesCon.title}>
            <Text style={StylesCon.textTitle}>Ingresar</Text>
          </View>
          <TouchableOpacity
            style={StylesCon.back}
            onPress={() => {
              navigation.push('HomeTab');
            }}
          >
            <AntDesign
              name="arrowleft"
              size={35}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: 'center', marginTop: '30%' }}>
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
            <View style={{ alignSelf: 'center', marginTop: '40%' }}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    addFunds(
                      userStore.email.toLowerCase(),
                      userStore.email.toLowerCase(),
                      'Recarga',
                      value,
                      '',
                      token,
                    ),
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
            <View style={{ alignSelf: 'center', marginTop: '40%' }}>
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
      <View style={StylesCon.filler} />
    </View>
  );
};
