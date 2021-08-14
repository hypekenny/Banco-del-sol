import React, { useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { getEmail } from '../../redux/actions';
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
  const contact = useSelector(state => state.Contacts);

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <View style={styles.containerAdd}>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email de tu contacto"
      />

      <TextInput
        onChangeText={onChangeText}
        value={name}
        placeholder="Nombre de tu contacto"
      />

      <TouchableOpacity
        onPress={() => dispatch(getEmail(email, name, idToken))}
      >
        <Text>INGRESAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Contact')}>
        <Text>ta</Text>
      </TouchableOpacity>
    </View>
  );
};
