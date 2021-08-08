import React from 'react';
import { View } from 'react-native';
import { TextInput } from '../../components/Form';
import { styles } from './RegisterStyles';

export function Register() {
  return (
    <View style={styles.container}>
      <TextInput
        label=""
        placeholderTextColor="black"
        placeholder="Nombre"
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
        placeholder="Email"
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
        placeholder="Contraseña"
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
        placeholder="Repite tu contraseña"
        // value={password}
        // onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
        // errorText={errors.password}
        autoCapitalize="none"
        style={styles.inputPassword}
      />
    </View>
  );
}
