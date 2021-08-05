import React from 'react';
import { View, Alert, Image } from 'react-native';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { useLogin } from '../../util/auth';
import { styles } from './LoginStyles';

const createTwoButtonAlert = () =>
  Alert.alert(
    'Te has olvidado la contraseña',
    'Maldita sea como sos tan bobo?',
    [
      {
        text: 'Si me la olvide',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Joda', onPress: () => console.log('OK Pressed') },
    ],
  );
const IngresarError = () =>
  Alert.alert('Login', 'No podes logearte', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);
const Ingresar = () =>
  Alert.alert('Login', 'Todo ok, pero el back ni patra', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

export const Login = () => {
  const { errors, email, setEmail, password, setPassword } = useLogin();

  return (
    <View style={styles.container}>
      {/* <Button type="outline" onPress={() => navigation.goBack()}>
        back
      </Button> */}
      <Image style={styles.img} source={require('../../assets/profile.jpg')} />
      <TextInput
        label=""
        placeholder="Usuario"
        placeholderTextColor="black"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        errorText={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.inputEmail}
      />
      <TextInput
        label=""
        placeholderTextColor="black"
        placeholder="Contraseña"
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
        errorText={errors.password}
        autoCapitalize="none"
        style={styles.inputPassword}
      />

      <Button type="outline" onPress={() => createTwoButtonAlert()}>
        te olvidaste la pass
      </Button>
      {password.length < 1 || email.length < 4 ? (
        <Button type="outline" onPress={() => IngresarError()}>
          Login
        </Button>
      ) : (
        <Button type="outline" onPress={() => Ingresar()}>
          Login
        </Button>
      )}
      {/* <Text onPress={createTwoButtonAlert}>Google</Text> */}
    </View>
  );
};
