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
} from '../../../redux/actions';
import { Props, RootState } from '../../../types/Types';
import colors from '../../../constants/colors';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export const Home = ({ navigation }: Props) => {
  const accountStore = useSelector((state: RootState) => state.account);
  const userStore = useSelector((state: RootState) => state.user);
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
    const month = date.toLocaleString('default', {
      month: 'short',
    }); /* Con esto consigo el nombre del mes actual abreviado. Ej: Jan, Feb, March... */

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

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
              }}
            />
          </TouchableWithoutFeedback>
        </View>
      ) : null}
      <View>
        <LinearGradient
          style={styles.header}
          colors={[colors.primary, colors.secondary]}
        />
        <View style={styles.title}>
          <Text style={styles.textTitle}>Hola {userStore.name}</Text>
        </View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => setBurger(!burger)}
        >
          <Ionicons style={styles.icon} name="menu" size={28} color="white" />
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
    </View>
  );
};
