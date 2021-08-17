/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Divider } from 'react-native-elements';
import { RootState } from '../../types/Types';
import { styles } from './TransactionsStyles';
import { Card } from '../../components/TransactionCard';

export function Transactions() {
  const account = useSelector((state: RootState) => state.account);

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
      <FlatList
        ListHeaderComponent={header}
        ListEmptyComponent={emptyList}
        data={account.balance.history.reverse()}
        renderItem={renderItem}
      />
    </View>
  );
}
