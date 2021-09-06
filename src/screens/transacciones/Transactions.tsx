/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { ButtonGroup } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Props, RootState } from '../../types/Types';
import { styles } from './TransactionsStyles';
import { TransactionList } from './TransactionList';
import { StylesCon } from '../../constants/Styles';
import colors from '../../constants/colors';
import { stylesAbout } from '../login/AboutStyles';
import { NavBar } from '../homeTab/navBar';

export function Transactions({ navigation }: Props) {
  const account = useSelector((state: RootState) => state.account);
  const [state, setState] = useState([]);
  const [focused, setFocused] = useState(false);
  const [buttonFilterIndex, setButtonFilterIndex] = useState(0);
  const [buttonOrderIndex, setButtonOrderIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (account) {
        setFocused(true);
        setButtonFilterIndex(0);
        setButtonOrderIndex(0);
        filterAndOrder();
      }
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      if (account) {
        setFocused(false);
        setButtonFilterIndex(0);
        setButtonOrderIndex(0);
        filterAndOrder();
      }
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (account && focused) {
      setButtonFilterIndex(0);
      setButtonOrderIndex(0);
      filterAndOrder();
    }
  }, [account, focused]);

  useEffect(() => {
    if (focused) filterAndOrder();
  }, [buttonOrderIndex, buttonFilterIndex]);

  const filterAndOrder = () => {
    if (buttonFilterIndex === 0) {
      if (buttonOrderIndex === 0) {
        const aux = [
          ...account.balance.history.filter(
            tran => tran.condition !== 'failed',
          ),
        ].reverse();
        setState(aux);
      }
      if (buttonOrderIndex === 1) {
        const aux = [
          ...account.balance.history.filter(
            tran => tran.condition !== 'failed',
          ),
        ];
        setState(aux);
      }
      if (buttonOrderIndex === 2) {
        const aux = [
          ...account.balance.history.filter(
            tran => tran.condition === 'failed',
          ),
        ];
        setState(aux);
      }
    }
    if (buttonFilterIndex === 1) {
      if (buttonOrderIndex === 0) {
        const aux = [...account.balance.history].reverse();
        const filteredAux = aux.filter(item => item.type === 'Recarga');
        setState(filteredAux);
      }
      if (buttonOrderIndex === 1) {
        const aux = [...account.balance.history];
        const filteredAux = aux.filter(item => item.type === 'Recarga');
        setState(filteredAux);
      }
    }
    if (buttonFilterIndex === 2) {
      if (buttonOrderIndex === 0) {
        const aux = [...account.balance.history].reverse();
        const filteredAux = aux.filter(item => item.type === 'Transfer');
        setState(filteredAux);
      }
      if (buttonOrderIndex === 1) {
        const aux = [...account.balance.history];
        const filteredAux = aux.filter(item => item.type === 'Transfer');
        setState(filteredAux);
      }
    }
  };

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
          marginLeft: '1%',
          marginRight: '1%',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880174589605478400/Mockup_-_android_-_BDS_app.png"
        alt=""
      />
      <View style={StylesCon.filler} />
      <View style={StylesCon.container}>
        {/* <View style={StylesCon.headerOne}>
          <LinearGradient
            style={StylesCon.header}
            colors={[colors.primary, colors.secondary]}
          />
          <View style={StylesCon.title}>
            <Text style={styles.textTitle}>Transacciones</Text>
          </View>
          <TouchableOpacity
            style={StylesCon.back}
            onPress={() => {
              navigation.push('HomeTab');
            }}
          >
            <AntDesign
              name="arrowleft"
              size={35}
              color="white"
              style={StylesCon.icon}
            />
          </TouchableOpacity>
        </View> */}

        <ScrollView style={styles.container}>
          <Text style={styles.textGeneral}>Filtrar por: </Text>
          <ButtonGroup
            onPress={setButtonFilterIndex}
            selectedIndex={buttonFilterIndex}
            buttons={['Todo', 'Recarga', 'Transfer']}
            containerStyle={{ height: 'auto', borderWidth: 0 }}
            buttonContainerStyle={styles.buttonGroupBox}
            selectedButtonStyle={styles.buttonGroupBoxSelected}
            textStyle={{ color: 'black' }}
            selectedTextStyle={{ color: 'white' }}
          />
          <Text style={styles.textGeneral}>Ordenar por: </Text>
          <ButtonGroup
            onPress={setButtonOrderIndex}
            selectedIndex={buttonOrderIndex}
            buttons={['Recientes', 'Antiguas', 'Fallidas']}
            containerStyle={{ height: 'auto', borderWidth: 0 }}
            buttonContainerStyle={styles.buttonGroupBox}
            selectedButtonStyle={styles.buttonGroupBoxSelected}
            textStyle={{ color: 'black' }}
            selectedTextStyle={{ color: 'white' }}
          />
          <TransactionList data={state} email={account.email} />
        </ScrollView>
        <NavBar navigation={navigation} />
      </View>
      <View style={StylesCon.filler} />
    </View>
  );
}
