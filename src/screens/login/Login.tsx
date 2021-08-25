import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import {
  cleanErrors,
  login,
  setLoadingFalse,
  setLoadingTrue,
} from '../../redux/actions';
import { styles } from './LoginStyles';
import { Props, resFromBack, RootState } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';
import { LoadingFull } from '../loading2/LoadingFull';
import { Phone } from '../../constants/phone';

export const Login = ({ navigation }: Props) => {
  const userStore = useSelector((state: resFromBack) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.errors);
  const dispatch = useDispatch();

  const [state, setState] = useState(false);

  const [user, setUser] = useState({
    email: 'aaa@hotmail.com',
    password: 'ASD123`',
    amount: 0,
  });

  useEffect(() => {
    if (error.length) {
      setState(true);
    }
  }, [error.length]);

  if (error.length) {
    dispatch(setLoadingFalse());
  }

  return (
    <View style={Phone.phone}>
      <View style={Phone.filler} />
      <View style={styles.container}>
        <View style={styles.headerOne}>
          <LinearGradient
            style={styles.header}
            colors={[colors.primary, colors.secondary]}
          />
          <View style={styles.title}>
            <Text style={styles.textTitle}>Ingresar</Text>
          </View>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.popToTop();
            }}
          >
            <AntDesign
              name="arrowleft"
              size={35}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <LoadingFull show={loading} />
        <View
          style={{
            alignSelf: 'center',
            zIndex: 100,
            position: 'absolute',
            width: '100%',
          }}
        >
          <AwesomeAlert
            show={state}
            showProgress={false}
            title={error}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Aceptar"
            confirmButtonColor="#ff4b6e"
            onConfirmPressed={() => {
              setState(false);
              dispatch(cleanErrors());
            }}
          />
        </View>
        {/*    {error.length ? (
        <View style={ErrorStyle.errorView}>
          <Text style={ErrorStyle.errorText}>{error}</Text>
        </View>
      ) : null} */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email...."
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
            onChangeText={(text: string) =>
              setUser({ ...user, password: text })
            }
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
                dispatch(setLoadingTrue());
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
        {userStore.email &&
        userStore.email.length &&
        userStore.condition === 'active'
          ? navigation.push('HomeTab')
          : null}
      </View>
      <View style={Phone.filler} />
    </View>
  );
};
