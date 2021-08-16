import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { loginStackParamList } from '../../types/Types';
import { useSelector } from 'react-redux';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const ContactDetails = ({ navigation }: Props) => {
  const details = useSelector(state => state.DetailTransfer);
  console.log(details);

  function toTransfer() {
    navigation.push('Transfer');
  }

  return (
    <View>
      <Text>{details.name}</Text>
      <Text>{details.email}</Text>
      <Button title="TRANSFERIR" onPress={() => toTransfer()} />
    </View>
  );
};
