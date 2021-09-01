import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
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
import { stylesAbout } from './AboutStyles';
import { Props, resFromBack, RootState } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';
import { LoadingFull } from '../loading2/LoadingFull';
import { StylesCon } from '../../constants/Styles';

export const Login = ({ navigation }: Props) => {
  const userStore = useSelector((state: resFromBack) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.errors);
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const [num, setNum] = useState(100);
  const [numTest, setNumTest] = useState(0);
  const [user, setUser] = useState({
    email: 'ferro@hotmail.com',
    password: '123QWE&',
    amount: 0,
  });
  useEffect(() => {
    if (error.length) {
      setState(true);
    }
  }, [error.length]);

  useEffect(() => {
    // Esto es provicional
    if (numTest === 0) {
      document.body.style.zoom = `${num}%`;
    } else {
      document.body.style.zoom = `${num}%`;
    }
  }, [num]);

  if (error.length) {
    dispatch(setLoadingFalse());
  }

  function Zoom() {
    setNum(num + 10);
    setTimeout(() => {
      setNumTest(0);
    }, 500);
  }

  function ZoomOut() {
    setNum(num - 10);
    setTimeout(() => {
      setNumTest(1);
    }, 1000);
  }

  return (
    <View style={StylesCon.phone}>
      <img
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880917630180028436/Banco-del-Sol-Background_Web.png"
        alt=""
      />
      <View style={stylesAbout.about}>
        <TouchableOpacity
          style={stylesAbout.btnAbout}
          onPress={() => navigation.push('AboutUs')}
        >
          <Text style={stylesAbout.btnText}>Sobre Nosotros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesAbout.btnAbout}>
          <Text style={stylesAbout.btnText}>Administrador</Text>
        </TouchableOpacity>

        <View style={{ width: '100%', alignItems: 'center', bottom: 0 }}>
          <Image
            style={stylesAbout.tinyLogo}
            source={{
              uri: 'https://media.discordapp.net/attachments/872492726397042688/874643755158892594/Banco-del-Sol-Logo.png',
            }}
          />
        </View>
      </View>

      <img
        style={{
          width: 411,
          height: 813,
          position: 'absolute',
          alignSelf: 'center',
          marginLeft: '1%',
          marginRight: '1%',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880174589605478400/Mockup_-_android_-_BDS_app.png"
        alt=""
      />

      <View style={StylesCon.filler} />
      <View style={styles.container}>
        <View style={StylesCon.headerOne}>
          <LinearGradient
            style={StylesCon.header}
            colors={[colors.primary, colors.secondary]}
          />
          <View style={StylesCon.title}>
            <Text style={styles.textTitle}>Inicio</Text>
          </View>
          <TouchableOpacity
            style={StylesCon.back}
            onPress={() => {
              navigation.popToTop();
            }}
          >
            <AntDesign
              name="arrowleft"
              size={35}
              color="white"
              style={StylesCon.icon}
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
            showConfirmButton
            confirmText="Aceptar"
            confirmButtonColor="#ff4b6e"
            onConfirmPressed={() => {
              setState(false);
              dispatch(cleanErrors());
            }}
          />
        </View>
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
      <View style={stylesAbout.aboutSelectPhone}>
        <Text style={stylesAbout.btnTextSelect}>
          Elige tu resolucion de pantalla
        </Text>
        <View
          style={{
            position: 'absolute',
            width: '36%',
            bottom: 100,
          }}
        >
          <TouchableOpacity
            style={stylesAbout.btnAboutSelect}
            onPress={() => ZoomOut()}
          >
            <Text style={stylesAbout.btnText}>MENOS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesAbout.btnAboutSelect}
            onPress={() => Zoom()}
          >
            <Text style={stylesAbout.btnText}>MAS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={StylesCon.filler} />
    </View>
  );
};
