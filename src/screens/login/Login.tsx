import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { login } from '../../redux/actions';
import { styles } from './LoginStyles';
import { Props, resFromBack } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';

export const Login = ({ navigation }: Props) => {
  const userStore = useSelector((state: resFromBack) => state.user);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
    amount: 0,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={`$${user.amount.toString()}`}
          onChangeText={(text: string) => {
            if (text.substring(1, text.length) === '')
              setUser({ ...user, amount: 0 });
            else
              setUser({
                ...user,
                amount: parseInt(text.substring(1, text.length), 10),
              });
          }}
          keyboardType="number-pad"
          style={ButtonPrimaryStyle.amountInput}
        />
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

      <View style={styles.btns}>
        {user.password.length > 6 && user.email.length > 4 ? (
          <TouchableOpacity
            onPress={() => {
              dispatch(login(user.email, user.password));
            }}
            style={styles.button}
          >
            <Text style={styles.text}>INGRESAR</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              console.log();
            }}
            disabled
            style={styles.buttondisabled}
          >
            <Text style={styles.textlogin}>INGRESAR</Text>
          </TouchableOpacity>
        )}
      </View>
      <LinearGradient
        style={styles.ellipse}
        colors={[colors.primary, colors.secondary]}
        end={[1, 1]}
      />
      {userStore.email && userStore.email.length
        ? navigation.push('Home')
        : null}
    </View>
  );
};
