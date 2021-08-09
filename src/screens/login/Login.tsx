import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { login } from '../../redux/actions';
import { styles } from './LoginStyles';
import { Props } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';

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
          placeholderTextColor="grey"
          value={user.email}
          onChangeText={(text: string) => setUser({ ...user, email: text })}
          keyboardType="email-address"
          style={ButtonPrimaryStyle.input}
        />

        <TextInput
          placeholder="Contraseña..."
          placeholderTextColor="grey"
          value={user.password}
          onChangeText={(text: string) => setUser({ ...user, password: text })}
          secureTextEntry
          style={ButtonPrimaryStyle.input}
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.push('ForgotPassword')}
        >
          <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <View>
        {user.password.length > 6 && user.email.length > 4 ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(login(user.email, user.password));
            }}
            style={styles.button}
          >
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(login(user.email, user.password));
            }}
            disabled
            style={styles.button}
          >
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
      <LinearGradient
        style={styles.ellipse}
        colors={[colors.primary, colors.secondary]}
        end={[1, 1]}
      />
    </View>
  );
};
