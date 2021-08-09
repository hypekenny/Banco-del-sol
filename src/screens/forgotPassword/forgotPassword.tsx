import firebase from 'firebase';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
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
        placeholderTextColor="grey"
        value={email}
        style={ButtonPrimaryStyle.input}
        onChangeText={(text: string) => setEmail(text)}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => handlePress(email)}
          style={ButtonSecondaryStyle.button}
        >
          <Text style={ButtonSecondaryStyle.text}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
