/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { ButtonGroup } from 'react-native-elements';
import { RootState } from '../../types/Types';
import { styles } from './TransactionsStyles';
import { TransactionList } from './TransactionList';

export function Transactions(props) {
  const account = useSelector((state: RootState) => state.account);
  const [state, setState] = useState([]);
  const [buttonFilterIndex, setButtonFilterIndex] = useState(0);
  const [buttonOrderIndex, setButtonOrderIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      if (account) {
        setButtonFilterIndex(0);
        setButtonOrderIndex(0);
        filterAndOrder();
      }
    });
    return unsubscribe;
  }, [props.navigation]);

  useEffect(() => {
    if (account) {
      setButtonFilterIndex(0);
      setButtonOrderIndex(0);
      filterAndOrder();
    }
  }, [account]);

  useEffect(() => {
    filterAndOrder();
  }, [buttonOrderIndex, buttonFilterIndex]);

  const filterAndOrder = () => {
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

  return (
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
        buttons={['Mas recientes', 'Mas antiguos']}
        containerStyle={{ height: 'auto', borderWidth: 0 }}
        buttonContainerStyle={styles.buttonGroupBox}
        selectedButtonStyle={styles.buttonGroupBoxSelected}
        textStyle={{ color: 'black' }}
        selectedTextStyle={{ color: 'white' }}
      />
      <TransactionList data={state} email={account.email} />
    </ScrollView>
  );
}
