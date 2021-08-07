import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { login } from '../../redux/actions';
import { styles } from './LoginStyles';

// import { resFromBack } from '../../types/Types';

export const Login = () => {
  // const userStore = useSelector((state: resFromBack) => state.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#ff4b6e', '#ff9349']}>
        <View>
          <TextInput
            placeholder="Email..."
            placeholderTextColor="black"
            value={user.email}
            onChangeText={(text: string) => setUser({ ...user, email: text })}
            keyboardType="email-address"
            style={styles.inputEmail}
          />
          <TextInput
            placeholder="Password..."
            placeholderTextColor="black"
            value={user.password}
            onChangeText={(text: string) =>
              setUser({ ...user, password: text })
            }
            secureTextEntry
            style={styles.inputEmail}
          />

          <TouchableOpacity onPress={() => console.log('a')}>
            <Text>Olvidaste tu mail?</Text>

            <MaterialIcons name="swap-horiz" size={32} color="white" />
          </TouchableOpacity>

          {user.password.length > 6 && user.email.length > 4 ? (
            <Button
              onPress={() => {
                dispatch(login(user.email, user.password));
              }}
              title="Login"
            />
          ) : (
            <Button
              onPress={() => console.log('esto no puede pasar')}
              title="Login"
              disabled
            />
          )}
        </View>
      </LinearGradient>
    </View>
  );
};
