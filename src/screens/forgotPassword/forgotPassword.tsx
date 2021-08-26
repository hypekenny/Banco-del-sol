import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import { styles } from './ForgotPasswordStyles';
import colors from '../../constants/colors';
import { cleanErrors, resetPass, resetSucceed } from '../../redux/actions';
import { Props, RootState } from '../../types/Types';
import { StylesCon } from '../../constants/Styles';

export function ForgotPassword({ navigation }: Props) {
  const [email, setEmail] = useState('');

  const error = useSelector((state: RootState) => state.errors);

  const succeed = useSelector((state: RootState) => state.succeed);

  const [state, setState] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error.length) {
      setState(true);
    }
  }, [error.length]);

  function handlePress(e: string) {
    dispatch(resetPass(e));
  }

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
        <View style={styles.headerOne}>
          <LinearGradient
            style={styles.header}
            colors={[colors.primary, colors.secondary]}
          />
          <View style={styles.title}>
            <Text style={styles.textTitle}>Resetear contraseña</Text>
          </View>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.push('Login');
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
        {/* <View style={styles.prueba}></View> */}
        {/* <View style={styles.prueba1}></View> */}
        <View
          style={{
            alignSelf: 'center',
            zIndex: 100,
            marginTop: '100%',
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
            showConfirmButton
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
            marginTop: '100%',
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
            showConfirmButton
            confirmText="Aceptar"
            confirmButtonColor="#ff4b6e"
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
      <View style={StylesCon.filler} />
    </View>
  );
}
