/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Divider, ButtonGroup } from 'react-native-elements';
import { RootState } from '../../types/Types';
import { styles } from './TransactionsStyles';
import { Card } from '../../components/TransactionCard';

export function Transactions() {
  const account = useSelector((state: RootState) => state.account);
  const [state, setState] = useState([]);
  const [buttonFilterIndex, setButtonFilterIndex] = useState(0);
  const [buttonOrderIndex, setButtonOrderIndex] = useState(0);

  useEffect(() => {
    if (account) {
      console.log('account useeffect');
      setState(account.balance.history);
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
    );
    if (buttonFilterIndex === 0) {
      if (buttonOrderIndex === 0) {
        const aux = [...account.balance.history].reverse();
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
  };

  const renderItem = ({ item }) => (
    <Card
      type={item.type}
      value={item.value}
      date={new Date(item.date)}
      styles={styles}
      sender={item.senderEmail}
      receiver={item.receiverEmail}
      user={account.email}
    />
  );

  const header = () => {
    return (
      <View>
        <Text style={styles.textheader}>Ultimas Transacciones: </Text>
        <Divider orientation="vertical" />
      </View>
    );
  };

  const emptyList = () => {
    return (
      <Text style={styles.texttype}>Aun no tienes ninguna transaccion.</Text>
    );
  };

  return (
    <View style={styles.container}>
      <ButtonGroup
        onPress={setButtonFilterIndex}
        selectedIndex={buttonFilterIndex}
        buttons={['Todo', 'Recarga', 'Transfer']}
        containerStyle={{ height: 'auto', padding: 2 }}
        buttonContainerStyle={{ backgroundColor: '#ff9349' }}
      />
      <ButtonGroup
        onPress={setButtonOrderIndex}
        selectedIndex={buttonOrderIndex}
        buttons={['Mas recientes', 'Mas antiguos']}
        containerStyle={{ height: 'auto', padding: 2 }}
        buttonContainerStyle={{ backgroundColor: '#ff9349' }}
      />
      <FlatList
        ListHeaderComponent={header}
        ListEmptyComponent={emptyList}
        data={state}
        renderItem={renderItem}
      />
    </View>
  );
}
