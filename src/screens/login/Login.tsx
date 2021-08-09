import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions';
import { styles } from './LoginStyles';
import { Props } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';

export const Login = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email..."
          placeholderTextColor="black"
          value={user.email}
          onChangeText={(text: string) => setUser({ ...user, email: text })}
          keyboardType="email-address"
          style={ButtonPrimaryStyle.input}
        />

        <TextInput
          placeholder="Password..."
          placeholderTextColor="black"
          value={user.password}
          onChangeText={(text: string) => setUser({ ...user, password: text })}
          secureTextEntry
          style={ButtonPrimaryStyle.input}
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.push('ForgotPassword')}
        >
          <Text style={styles.text}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      {user.password.length > 6 && user.email.length > 4 ? (
        <TouchableOpacity
          onPress={() => {
            dispatch(login(user.email, user.password));
          }}
          style={ButtonSecondaryStyle.button}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            dispatch(login(user.email, user.password));
          }}
          style={ButtonSecondaryStyle.button}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
