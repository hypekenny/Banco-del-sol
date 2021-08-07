import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text } from '../../components/Text';
import { resetPassword } from '../../redux/actions';

export default function ForgotPassword() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  return (
    <View>
      <Text type="header">Resetea tu contraseña</Text>
      <TextInput
        placeholder="Mail..."
        placeholderTextColor="black"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        secureTextEntry
        style={styles.inputEmail}
      />
      <Button
        onPress={() => {
          dispatch(resetPassword(email));
        }}
        title="resetPassword"
      />
    </View>
  );
}
