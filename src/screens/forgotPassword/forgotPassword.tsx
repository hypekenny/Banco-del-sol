import firebase from 'firebase';
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Text } from '../../components/Text';

export function ForgotPassword() {
  const [email, setEmail] = useState('');

  async function handlePress(e: string) {
    try {
      await firebase.auth().sendPasswordResetEmail(e);
      alert('Revisa tu email para resetear tu contraseña');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <Text type="header">Resetea tu contraseña</Text>
      <TextInput
        placeholder="Mail..."
        placeholderTextColor="black"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />
      <Button onPress={() => handlePress(email)} title="Resetea tu email" />
    </View>
  );
}
