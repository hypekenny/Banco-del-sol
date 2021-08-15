import React, { useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { getEmail, getName } from '../../redux/actions';
import { styles } from './ContactStyles';
import { loginStackParamList } from '../../types/Types';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const ContactAdd = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [name, onChangeText] = React.useState('');
  const idToken = useSelector(state => state.token);
  const nameUser = useSelector(state => state.nameDetail);

  useEffect(() => {
    onChangeText(nameUser);
  }, [nameUser]);

  function callName() {
    dispatch(getName(email, idToken));
    onChangeText(nameUser);
    console.log('Name:A', nameUser);
  }
  function AddFriend(email, idToken, name) {
    dispatch(getEmail(email, idToken, name));

    onChangeText('');
  }

  function BackAndClear() {
    onChangeText('');
    setEmail('');
    navigation.push('Contact');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => BackAndClear()}>
        <Text>VOLVER</Text>
      </TouchableOpacity>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email de tu contacto"
      />

      {nameUser ? (
        <TextInput
          onChangeText={onChangeText}
          value={name}
          placeholder="Nombre de tu contacto"
        />
      ) : null}

      {email ? (
        <TouchableOpacity onPress={() => callName()}>
          <Text>BUSCAR</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => callName()} disabled>
          <Text>BUSCAR</Text>
        </TouchableOpacity>
      )}

      {nameUser ? (
        <TouchableOpacity onPress={() => AddFriend(email, idToken, name)}>
          <Text>AGREGAR A CONTACTOS</Text>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity onPress={() => navigation.push('Contact')}>
        <Text>ta</Text>
      </TouchableOpacity>
    </View>
  );
};
