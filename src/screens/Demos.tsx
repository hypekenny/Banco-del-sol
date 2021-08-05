import React from 'react';
import { StyleSheet, View, Alert, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import colors from '../constants/colors';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { TextInput } from '../components/Form';
import { useLogin } from '../util/auth';
import { loginStackParamList } from '../types/Types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  inputEmail: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,

    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 10,
  },
  inputPassword: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,

    paddingLeft: 8,
    paddingRight: 8,
    marginTop: -40,
  },
  inputRegister: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,

    paddingLeft: 8,
    paddingRight: 8,
    // marginTop: -40,
  },
  btn: {
    backgroundColor: 'blue',
  },
  img: {
    borderRadius: 50,
    width: 80,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Start = ({ navigation }: Props) => (
  <View style={styles.container}>
    <ScrollView>
      <Text type="header">START</Text>
      <Button type="outline" onPress={() => navigation.push('Login')}>
        Login
      </Button>
      <Button type="outline" onPress={() => navigation.push('RegisterStep1')}>
        RegisterStep1
      </Button>
      <Button type="outline" onPress={() => navigation.push('RegisterStep2')}>
        RegisterStep2
      </Button>
      <Button type="outline" onPress={() => navigation.push('Home')}>
        Home
      </Button>
      <Button type="outline" onPress={() => navigation.push('Account')}>
        Account
      </Button>
      <Button type="outline" onPress={() => navigation.push('AddFunds')}>
        AddFunds
      </Button>
      <Button type="outline" onPress={() => navigation.push('Transfer')}>
        Transfer
      </Button>
    </ScrollView>
  </View>
);
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

export const RegisterStep1 = () => (
  <View style={styles.container}>
    <TextInput
      label=""
      placeholderTextColor="black"
      placeholder="Pasaporte"
      // value={pasaport}
      // onChangeText={(text: string) => setPasaport(text)}
      secureTextEntry
      // errorText={errors.password}
      autoCapitalize="none"
      style={styles.inputPassword}
    />

    <TextInput
      label=""
      placeholderTextColor="black"
      placeholder="DNI"
      // value={password}
      // onChangeText={(text: string) => setPassword(text)}
      secureTextEntry
      // errorText={errors.password}
      autoCapitalize="none"
      style={styles.inputPassword}
    />

    <TextInput
      label=""
      placeholderTextColor="black"
      placeholder="Nombre"
      // value={password}
      // onChangeText={(text: string) => setPassword(text)}
      secureTextEntry
      // errorText={errors.password}
      autoCapitalize="none"
      style={styles.inputPassword}
    />

    <TextInput
      label=""
      placeholderTextColor="black"
      placeholder="Apellido"
      // value={password}
      // onChangeText={(text: string) => setPassword(text)}
      secureTextEntry
      // errorText={errors.password}
      autoCapitalize="none"
      style={styles.inputPassword}
    />

    <TextInput
      label=""
      placeholderTextColor="black"
      placeholder="Fecha de nacimiento"
      // value={password}
      // onChangeText={(text: string) => setPassword(text)}
      secureTextEntry
      // errorText={errors.password}
      autoCapitalize="none"
      style={styles.inputPassword}
    />
  </View>
);
export const RegisterStep2 = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Text type="header">REGISTERSTEP2</Text>
    <Button type="outline" onPress={() => navigation.goBack()}>
      back
    </Button>
  </View>
);

export const Home = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Text type="header">HOME</Text>
    <Button type="outline" onPress={() => navigation.goBack()}>
      back
    </Button>
  </View>
);

export const Account = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Text type="header">ACCOUNT</Text>
    <Button type="outline" onPress={() => navigation.goBack()}>
      back
    </Button>
  </View>
);

export const AddFunds = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Text type="header">ADDFOUNTS</Text>
    <Button type="outline" onPress={() => navigation.goBack()}>
      back
    </Button>
  </View>
);

export const Transfer = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Text type="header">TRANSFER</Text>
    <Button type="outline" onPress={() => navigation.goBack()}>
      back
    </Button>
  </View>
);
