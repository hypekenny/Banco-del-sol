import React from 'react';
import { View, Button, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { styles } from './ContactStyles';
import { useSelector } from 'react-redux';
import { loginStackParamList } from '../../types/Types';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Contact = ({ navigation }: Props) => {
  const contact = useSelector(state => state.Contacts);
  console.log('Contact', contact);

  return (
    <View>
      <Button
        title="Press button"
        onPress={() => navigation.push('ContactAdd')}
      />
      {console.log('aasdsadasdas', contact)}

      {contact.map((contacto, i) => {
        return contacto.name ? (
          <View key={i}>
            <Text>{contacto.email}</Text>
            <Text>{contacto.name}</Text>
          </View>
        ) : null;
      })}
    </View>
  );
};
