/* eslint-disable prefer-const */
// feat-Cell-phone-compatibility

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  LogBox,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';
import { styles } from './HomeStyles';
import {
  setLoadingFalse,
  updateAccount,
  logout,
  cleanErrors,
  RemoveUpdatedAccount,
} from '../../../redux/actions';
import { Props, RootState } from '../../../types/Types';
import colors from '../../../constants/colors';
import { StylesCon } from '../../../constants/Styles';
import { NavBar } from '../navBar';
import { stylesAbout } from '../../login/AboutStyles';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export const Home = ({ navigation }: Props) => {
  const accountStore = useSelector((state: RootState) => state.account);
  const userStore = useSelector((state: RootState) => state.user);
  const flagUpdatedAccount = useSelector(
    (state: RootState) => state.updatedAccount,
  );
  const token = useSelector((state: RootState) => state.token);
  const error = useSelector((state: RootState) => state.errors);

  const dispatch = useDispatch();
  const [burger, setBurger] = useState(false);
  const [state, setState] = useState(false);
  const [ing, setIng] = useState(0);
  const [gast, setGast] = useState(0);

  useEffect(() => {
    if (error.length) {
      dispatch(setLoadingFalse());
      setState(true);
    }
  }, [error.length]);

  useEffect(() => {
    const date = new Date();
    const month = date.toString().split(' ')[1];

    if (accountStore.balance.history.length === 0) {
      return setIng(0);
    }
    let totalIncomings: number = 0;
    let totalOutgoings: number = 0;

    accountStore.balance.history.forEach(e => {
      const transactionMonthString = e.date.toString().split(' ')[1];
      if (transactionMonthString === month) {
        if (e.receiverEmail === userStore.email) {
          /* si el receptor es igual al email del user loggeado, significa que fue un ingreso (ya sea recarga o recepcion de transferencia) */
          totalIncomings += e.value;
        } else {
          totalOutgoings += e.value;
        }
      }
    });
    setIng(totalIncomings);
    setGast(totalOutgoings);
  }, [accountStore, userStore.email]);

  const [num, setNum] = useState(100);
  const [numTest, setNumTest] = useState(0);

  useEffect(() => {
    // Esto es provicional
    if (numTest === 0) {
      document.body.style.zoom = `${num}%`;
    } else {
      document.body.style.zoom = `${num}%`;
    }
  }, [num]);

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
        <TouchableOpacity style={stylesAbout.btnAbout}>
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
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880174589605478400/Mockup_-_android_-_BDS_app.png"
        alt=""
      />
      <View style={StylesCon.filler} />
      <View style={styles.container}>
        {burger ? (
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 200,
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                width: '60%',
                height: '100%',
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              }}
            >
              <View>
                <TouchableOpacity
                  style={styles.back}
                  onPress={() => setBurger(!burger)}
                >
                  <Ionicons
                    style={styles.icon}
                    name="menu"
                    size={28}
                    color={colors.primary}
                  />
                </TouchableOpacity>
                <View style={{ marginTop: '40%', justifyContent: 'center' }}>
                  <Icon
                    type="material-community"
                    name="account-circle"
                    size={65}
                    color={colors.primary}
                    style={{ marginLeft: 20, alignSelf: 'flex-start' }}
                  />
                </View>
                <Text
                  style={{
                    color: colors.primary,
                    fontSize: 26,
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    marginLeft: 20,
                  }}
                >{`${userStore.name} ${userStore.lastName}`}</Text>
                <TouchableOpacity
                  onPress={() => navigation.push('Account')}
                  style={{ marginTop: '20%', justifyContent: 'center' }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                  >
                    <Icon
                      type="material-community"
                      name="file-document-outline"
                      size={27}
                      color={colors.primary}
                      style={{ marginLeft: 20 }}
                    />
                    <Text style={styles.burgerText}>Mis datos</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.push('Contact')}
                  style={{ marginTop: '20%', justifyContent: 'center' }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                  >
                    <Icon
                      type="material-community"
                      name="contacts"
                      size={30}
                      color={colors.primary}
                      style={{ marginLeft: 20 }}
                    />
                    <Text style={styles.burgerText}>Contactos</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(logout());
                    navigation.popToTop();
                  }}
                  style={{ marginTop: '20%', justifyContent: 'center' }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                  >
                    <Icon
                      type="material-community"
                      name="logout"
                      size={27}
                      color="#F53D3D"
                      style={{ marginLeft: 20 }}
                    />
                    <Text style={styles.burgerTextLogout}>Cerrar sesion</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableWithoutFeedback onPress={() => setBurger(!burger)}>
              <View
                style={{
                  alignItems: 'flex-end',
                  backgroundColor: 'black',
                  width: '40%',
                  height: '100%',
                  opacity: 0.7,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        ) : null}

        <View>
          <LinearGradient
            style={StylesCon.header}
            colors={[colors.primary, colors.secondary]}
          />
          <View style={StylesCon.title}>
            <Text style={StylesCon.textTitle}>Hola {userStore.name}</Text>
          </View>
          <TouchableOpacity
            style={StylesCon.back}
            onPress={() => setBurger(!burger)}
          >
            <Ionicons
              style={StylesCon.icon}
              name="menu"
              size={28}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: '100%',
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
        <View
          style={{
            marginTop: '100%',
            zIndex: 100,
            position: 'absolute',
            width: '100%',
          }}
        >
          <AwesomeAlert
            show={flagUpdatedAccount}
            showProgress={false}
            title="Tus datos fueron actualizados!"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton
            confirmText="Aceptar"
            confirmButtonColor="#ff4b6e"
            onConfirmPressed={() => {
              RemoveUpdatedAccount(dispatch);
            }}
          />
        </View>
        <View style={styles.view1}>
          <Text style={{ fontSize: 20, fontWeight: '100', color: '#3b3b3b' }}>
            Balance
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 40, fontWeight: '900' }}>
              ${accountStore.balance.amount}
            </Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(updateAccount(accountStore.email.toLowerCase(), token))
              }
            >
              <Ionicons
                style={styles.styleIcon}
                name="reload-circle-sharp"
                size={28}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.boxt}>
            <Text style={styles.textGeneral}>Este mes</Text>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
            >
              <Text style={styles.text}>Ingresos</Text>
              <Text style={styles.text}>Gastos</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.textNum}>${ing}</Text>
              <Text style={styles.textNum}>${gast}</Text>
            </View>
          </View>
        </View>
        <View style={styles.view3}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.push('AddFunds')}
              style={styles.bottonRecargar}
            >
              <Ionicons style={styles.styleIcon1} name="add-circle" size={28} />
              <Text style={styles.bottonTextR}>Recargar Dinero</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.push('Transfer')}
              style={styles.bottonEnviar}
            >
              <Ionicons style={styles.styleIcon1} name="send" size={28} />
              <Text style={styles.bottonTextE}>Enviar Dinero</Text>
            </TouchableOpacity>
          </View>
        </View>
        {accountStore.email && accountStore.email.length
          ? dispatch(setLoadingFalse())
          : null}
        <NavBar navigation={navigation} />
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
            <Text style={stylesAbout.btnText}>ZOOM - </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesAbout.btnAboutSelect}
            onPress={() => Zoom()}
          >
            <Text style={stylesAbout.btnText}>ZOOM + </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={StylesCon.filler} />
    </View>
  );
};
