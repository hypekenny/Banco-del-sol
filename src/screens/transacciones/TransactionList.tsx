import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import { Card } from './TransactionCard';
import { styles } from './TransactionsStyles';

export function TransactionList(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  const header = () => {
    return (
      <View>
        <Text style={styles.textGeneral}>Ultimas Transacciones: </Text>
        <Divider orientation="vertical" />
      </View>
    );
  };

  const emptyList = () => {
    return (
      <Text style={styles.texttype}>Aun no tienes ninguna transaccion.</Text>
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
        // ListHeaderComponent={header}
        ListEmptyComponent={emptyList}
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
