import React from 'react';
import { View } from 'react-native';
import { TextInput } from '../../components/Form';
import { styles } from './RegisterStyles';

export const Register = () => (
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
