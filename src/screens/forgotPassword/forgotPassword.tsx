import firebase from 'firebase';
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Text } from '../../components/Text';
import { styles } from './ForgotPasswordStyles';

export function ForgotPassword() {
  const [email, setEmail] = useState('');

  async function handlePress(e: string) {
    try {
      await firebase.auth().sendPasswordResetEmail(e);
      alert('Revisa tu email para resetear tu contraseña');
    } catch (error) {
      alert('Debes ingresar un email válido');
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ingresa tu email..."
        placeholderTextColor="black"
        value={email}
        style={styles.inputEmail}
        onChangeText={(text: string) => setEmail(text)}
      />
      <Button
        onPress={() => handlePress(email)}
        title="Enviar"
        color="#ff4b6e"
      />
    </View>
  );
}
