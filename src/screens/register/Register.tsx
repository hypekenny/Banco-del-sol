import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInput } from '../../components/Form';
import { styles } from './RegisterStyles';
import { loginStackParamList } from '../../types/Types';
import { Button } from '../../components/Button';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export function Register({ navigation }: Props) {
  const [name, setName] = useState<string>('');

  const [lastName, setLastName] = useState<string>('');

  const [email, setEmail] = useState<string>('');

  const [pass, setPass] = useState<string>('');

  const [passT, setPassT] = useState<string>('');
  // console.log(passT.length);

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Nombre"
          value={name}
          onChangeText={(text: string) => setName(text)}
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Apellido"
          value={lastName}
          onChangeText={(text: string) => setLastName(text)}
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Email"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          autoCapitalize="none"
          style={styles.inputPassword}
          keyboardType="email-address"
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Contraseña"
          value={pass}
          onChangeText={(text: string) => setPass(text)}
          secureTextEntry
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Repite tu contraseña"
          value={passT}
          onChangeText={(text: string) => setPassT(text)}
          secureTextEntry
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        {name.length > 2 &&
        email.length > 6 &&
        pass.length > 6 &&
        pass === passT ? (
          <Button type="outline" onPress={() => navigation.push('RegisterV2')}>
            RegisterV2
          </Button>
        ) : null}
      </ScrollView>
    </View>
  );
}
