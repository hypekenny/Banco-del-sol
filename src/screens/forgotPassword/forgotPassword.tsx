import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import { styles } from './ForgotPasswordStyles';
import colors from '../../constants/colors';
import {
  cleanErrors,
  resetPass,
  resetSucceed,
  setLoadingFalse,
  setLoadingTrue,
} from '../../redux/actions';
import { RootState } from '../../types/Types';
import { LoadingFull } from '../loading2/LoadingFull';

export function ForgotPassword() {
  const [email, setEmail] = useState('');

  const error = useSelector((state: RootState) => state.errors);

  const succeed = useSelector((state: RootState) => state.succeed);

  const loading = useSelector((state: RootState) => state.loading);

  const [state, setState] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error.length) {
      setState(true);
    }
  }, [error.length]);

  function handlePress(e: string) {
    dispatch(resetPass(e));
    dispatch(setLoadingTrue());
  }

  if (error.length || succeed) {
    dispatch(setLoadingFalse());
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.prueba}></View> */}
      {/* <View style={styles.prueba1}></View> */}
      <LoadingFull show={loading} />
      <View
        style={{
          alignSelf: 'center',
          zIndex: 100,
          position: 'absolute',
          width: '100%',
        }}
      >
        <AwesomeAlert
          show={state}
          showProgress={false}
          title={error}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Aceptar"
          confirmButtonColor="#ff4b6e"
          onConfirmPressed={() => {
            setState(false);
            dispatch(cleanErrors());
          }}
        />
      </View>
      <View
        style={{
          alignSelf: 'center',
          zIndex: 100,
          position: 'absolute',
          width: '100%',
        }}
      >
        <AwesomeAlert
          show={succeed}
          showProgress={false}
          title="Se envió un correo a tu casilla"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Aceptar"
          confirmButtonColor="#4ca64c"
          onConfirmPressed={() => {
            dispatch(resetSucceed());
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>
          Ingresa el mail con el que te registraste y te enviaremos un correo
          con un link para recuperar tu contraseña.
        </Text>
        <TextInput
          placeholder="Ingresa tu email..."
          placeholderTextColor="grey"
          value={email}
          style={ButtonPrimaryStyle.input}
          onChangeText={(text: string) => setEmail(text)}
        />
      </View>
      <View style={styles.containerButton}>
        {email.length > 4 ? (
          <TouchableOpacity
            onPress={() => handlePress(email)}
            style={styles.button}
          >
            <Text style={ButtonSecondaryStyle.text}>Enviar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => handlePress(email)}
            style={styles.buttondisabled}
          >
            <Text style={ButtonSecondaryStyle.text}>Enviar</Text>
          </TouchableOpacity>
        )}
      </View>
      <LinearGradient
        style={styles.ellipse}
        colors={[colors.primary, colors.secondary]}
        end={[1, 1]}
      />
    </View>
  );
}
