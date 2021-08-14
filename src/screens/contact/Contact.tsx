import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { styles } from './ContactStyles';
import { useSelector, useDispatch } from 'react-redux';
import { loginStackParamList } from '../../types/Types';
import { styles } from './ContactStyles';
import { detailContact } from '../../redux/actions';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Contact = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.Contacts);
  function clear() {
    navigation.push('Home');
    dispatch(detailContact('', ''));
  }

  function detailsfn(email, name) {
    navigation.push('ContactDetails');
    dispatch(detailContact(email, name));
    console.log(email);
  }

  return (
    <View style={styles.container}>
      <Button title="Bac" onPress={() => clear()} />;
      <Button
        title="Press button"
        onPress={() => navigation.push('ContactAdd')}
      />
      {contact.map((contacto, i: number) => {
        return contacto.name ? (
          <View>
            <View key={i} style={styles.Box}>
              <Text style={styles.textBox}>{contacto.email}</Text>
              <Text style={styles.textBox}>{contacto.name}</Text>
              <Button
                title="Press button"
                onPress={() => detailsfn(contacto.email, contacto.name)}
              />
            </View>
          </View>
        ) : null;
      })}
    </View>
  );
};
