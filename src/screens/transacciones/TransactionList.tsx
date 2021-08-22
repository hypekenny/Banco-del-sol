import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Card } from './TransactionCard';
import { styles } from './TransactionsStyles';

export function TransactionList(props) {
  const emptyList = () => {
    return (
      <Text style={styles.textGeneral}>
        Aun no tienes ninguna transaccion para mostrar.
      </Text>
    );
  };

  const renderItem = ({ item }) => (
    <Card
      type={item.type}
      value={item.value}
      date={new Date(item.date)}
      styles={styles}
      sender={item.senderEmail}
      receiver={item.receiverEmail}
      user={props.email}
      expanded={false}
      id={props.id}
    />
  );

  return (
    <View>
      <FlatList
        ListEmptyComponent={emptyList}
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
