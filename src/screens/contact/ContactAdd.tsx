import React, { useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { getEmail, getName } from '../../redux/actions';
import { styles } from './ContactStyles';
import { loginStackParamList } from '../../types/Types';
import colors from '../../constants/colors';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const ContactAdd = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [name, onChangeText] = React.useState('');
  const idToken = useSelector(state => state.token);
  const userEmail = useSelector(state => state.account.email);
  const nameUser = useSelector(state => state.nameDetail);

  useEffect(() => {
    onChangeText(nameUser);
  }, [nameUser]);

  function callName() {
    dispatch(getName(email, idToken));
    onChangeText(nameUser);
  }
  function AddFriend(email, idToken, name) {
    dispatch(getEmail(email, idToken, name));
    setEmail('');
    onChangeText('');
  }

  function BackAndClear() {
    onChangeText('');
    setEmail('');
    navigation.push('Contact');
  }

  return (
    <View style={styles.container}>
      <View style={styles.cosa}>
        <LinearGradient
          style={styles.header}
          colors={[colors.primary, colors.secondary]}
          end={[1, 1]}
        />
        <View style={styles.title}>
          <Text style={styles.textTitle}>Agregar Contactos</Text>
        </View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            BackAndClear();
          }}
        >
          <AntDesign
            name="arrowleft"
            size={35}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={() => BackAndClear()}>
        <Text>VOLVER</Text>
      </TouchableOpacity> */}
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

      {email && email !== userEmail ? (
        <TouchableOpacity onPress={() => callName()}>
          <Text>BUSCAR</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => callName()} disabled>
          <Text>BUSCAR</Text>
        </TouchableOpacity>
      )}

      {name.length > 2 ? (
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
