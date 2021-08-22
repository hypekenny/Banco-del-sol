/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Divider, ButtonGroup } from 'react-native-elements';
import { RootState } from '../../types/Types';
import { styles } from './TransactionsStyles';
import { Card } from './TransactionCard';
import { TransactionList } from './TransactionList';

export function Transactions(props) {
  const account = useSelector((state: RootState) => state.account);
  const [state, setState] = useState([]);
  const [buttonFilterIndex, setButtonFilterIndex] = useState(0);
  const [buttonOrderIndex, setButtonOrderIndex] = useState(0);

  useEffect(
    () =>
      props.navigation.addListener('focus', () => {
        if (account) {
          console.log('focused');
          console.log('ESTO ES HISTORY 0', account.balance.history[0]);
          // setState(account.balance.history);
          setButtonFilterIndex(0);
          setButtonOrderIndex(0);
          filterAndOrder();
        }
      }),
    [],
  );

  useEffect(
    () =>
      props.navigation.addListener('blur', () => {
        if (account) {
          console.log('blur');
          setState([]);
          setButtonFilterIndex(0);
          setButtonOrderIndex(0);
        }
      }),
    [],
  );

  useEffect(() => {
    console.log('entre al use effect');
    if (account) {
      console.log('focused');
      // setState(account.balance.history);
      setButtonFilterIndex(0);
      setButtonOrderIndex(0);
      filterAndOrder();
    }
  }, [account]);

  useEffect(() => {
    filterAndOrder();
  }, [buttonOrderIndex, buttonFilterIndex]);
  // console.log(account.balance.history[0]);
  // console.log(account);

  const filterAndOrder = () => {
    console.log(
      'filter index ',
      buttonFilterIndex,
      'order index ',
      buttonOrderIndex,
      'state lenght',
      state.length,
    );
    if (buttonFilterIndex === 0) {
      if (buttonOrderIndex === 0) {
        const aux = [...account.balance.history].reverse();
        console.log('entre correctamente');
        setState(aux);
      }
      if (buttonOrderIndex === 1) {
        const aux = [...account.balance.history];
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
    // if (state.length > 0) {

    // }
  };

  // const renderItem = ({ item }) => (
  //   <Card
  //     type={item.type}
  //     value={item.value}
  //     date={new Date(item.date)}
  //     styles={styles}
  //     sender={item.senderEmail}
  //     receiver={item.receiverEmail}
  //     user={account.email}
  //     expanded={false}
  //   />
  // );

  // const header = () => {
  //   return (
  //     <View>
  //       <Text style={styles.textheader}>Ultimas Transacciones: </Text>
  //       <Divider orientation="vertical" />
  //     </View>
  //   );
  // };

  // const emptyList = () => {
  //   return (
  //     <Text style={styles.texttype}>Aun no tienes ninguna transaccion.</Text>
  //   );
  // };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textGeneral}>Filtrar por: </Text>
      <ButtonGroup
        onPress={setButtonFilterIndex}
        selectedIndex={buttonFilterIndex}
        buttons={['Todo', 'Recarga', 'Transfer']}
        containerStyle={{ height: 'auto', padding: 2 }}
        buttonContainerStyle={{ backgroundColor: '#ff9349' }}
        selectedButtonStyle={{ backgroundColor: '#ff4b6e' }}
        textStyle={{ color: 'white' }}
      />
      <Text style={styles.textGeneral}>Ordenar por: </Text>
      <ButtonGroup
        onPress={setButtonOrderIndex}
        selectedIndex={buttonOrderIndex}
        buttons={['Mas recientes', 'Mas antiguos']}
        containerStyle={{ height: 'auto', padding: 2 }}
        buttonContainerStyle={{ backgroundColor: '#ff9349' }}
        selectedButtonStyle={{ backgroundColor: '#ff4b6e' }}
        textStyle={{ color: 'white' }}
      />
      <TransactionList data={state} email={account.email} />
    </ScrollView>
  );
}
