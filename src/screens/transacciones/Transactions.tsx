/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ButtonGroup } from 'react-native-elements';
import { RootState } from '../../types/Types';
import { styles } from './TransactionsStyles';
import { TransactionList } from './TransactionList';
import colors from '../../constants/colors';

export function Transactions(props) {
  const account = useSelector((state: RootState) => state.account);
  const [state, setState] = useState([]);
  const [focused, setFocused] = useState(false);
  const [buttonFilterIndex, setButtonFilterIndex] = useState(0);
  const [buttonOrderIndex, setButtonOrderIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      if (account) {
        setFocused(true);
        setButtonFilterIndex(0);
        setButtonOrderIndex(0);
        filterAndOrder();
      }
    });
    return unsubscribe;
  }, [props.navigation]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('blur', () => {
      if (account) {
        setFocused(false);
        setButtonFilterIndex(0);
        setButtonOrderIndex(0);
        filterAndOrder();
      }
    });
    return unsubscribe;
  }, [props.navigation]);

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
      <View style={styles.filtersOrder}>
        <Text style={styles.textGeneral}>Filtrar por: </Text>
        <ButtonGroup
          onPress={setButtonFilterIndex}
          selectedIndex={buttonFilterIndex}
          buttons={['Todo', 'Recarga', 'Transfer']}
          containerStyle={{ height: 'auto', borderWidth: 0 }}
          /* containerStyle={{
            borderWidth: 2,
            borderRadius: 25,
            borderColor: colors.primary,
          }} */
          innerBorderStyle={{ color: colors.primary }}
          buttonContainerStyle={styles.buttonGroupBox}
          selectedButtonStyle={styles.buttonGroupBoxSelected}
          textStyle={{ color: 'black', marginTop: 0 }}
          selectedTextStyle={{ color: 'white' }}
        />
      </View>
      <View style={styles.filtersOrder}>
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
      </View>
      <TransactionList
        style={{ marginTop: '5%' }}
        data={state}
        email={account.email}
      />
    </ScrollView>
  );
}
