import React from 'react';
import { StyleSheet, View } from 'react-native';

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
});

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Start = ({ navigation }: Props) => (
  <View style={styles.container}>
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
  </View>
);

export const Login = ({ navigation }: Props) => {
  const { errors, email, setEmail, password, setPassword } = useLogin();

  return (
    <View style={styles.container}>
      <Text type="header">LOGIN</Text>
      <Button type="outline" onPress={() => navigation.goBack()}>
        back
      </Button>
      <TextInput
        label="Email Address"
        placeholder="Enter your email..."
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        errorText={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        placeholder="Enter your password..."
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
        errorText={errors.password}
        autoCapitalize="none"
      />
    </View>
  );
};

export const RegisterStep1 = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Text type="header">REGISTERSTEP1</Text>
    <Button type="outline" onPress={() => navigation.goBack()}>
      back
    </Button>
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
