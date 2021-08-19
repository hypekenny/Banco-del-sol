import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { detailContact, getEmail, getName } from '../../redux/actions';
import { styles } from './ContactAddStyles';
import { loginStackParamList, RootState } from '../../types/Types';
import colors from '../../constants/colors';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const ContactAdd = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<String>('');
  const [name, setName] = useState<String>('');
  const [step, setStep] = useState<boolean>(false);
  const [msg, setMsg] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [msgContact, setMsgContact] = useState<boolean>(false);
  const contacts = useSelector<RootState>(state => state.Contacts);
  const idToken = useSelector<RootState>(state => state.token);
  const userEmail = useSelector<RootState>(state => state.account.email);
  const nameUser = useSelector(state => state.nameDetail);

  function askName() {
    for (let i = 0; i < contacts.length; i++) {
      contacts[i].email === email ? setMsgContact(true) : null;
    }
  }
  if (msgContact) {
    setTimeout(() => {
      setMsgContact(false);
      setMsg(false);
      setName('');
    }, 3000);
  }
  useEffect(() => {
    if (step) {
      setName(nameUser);
      setTimeout(() => {
        if (nameUser) {
          setMsg(true);
        }

        setTimeout(() => {
          setMsg(false);
        }, 2000);
      }, 500);
    } else {
      setName('');
    }
  }, [nameUser]);

  useEffect(() => {
    setStep(true);
  }, []);

  // CallName manda a buscar un email  si lo encuentra te da su nombre.

  function callName() {
    setShowInput(false);
    askName();
    if (!msgContact) {
      dispatch(getName(email, idToken));
      setShowInput(true);
    }
    if (!msg) {
      setName(nameUser);
    }
  }

  // AddFriend se encarga de guardar en "REDUX" los contactos que fueron agregados.

  function AddFriend(email, idToken, name) {
    dispatch(getEmail(email, idToken, name));
    setEmail('');
    setName('');
  }

  // BackAndClear se encarga de volver a "Contact" y limpiar todos los estados

  function BackAndClear() {
    setEmail('');
    dispatch(detailContact('', ''));
    setName('');
    setShowInput(false);
    setStep(false);
    navigation.push('Contact');
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerOne}>
        <LinearGradient
          style={styles.header}
          colors={[colors.primary, colors.secondary]}
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
      {/* FIN HEADER */}
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email de tu contacto"
        style={styles.input}
      />
      {/* BOTON BUSCAR */}
      {email && email !== userEmail ? (
        <TouchableOpacity onPress={() => callName()} style={styles.button}>
          <Text style={styles.search}>BUSCAR</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttondisabled} disabled>
          <Text style={styles.searchDisable}>BUSCAR</Text>
        </TouchableOpacity>
      )}

      {/* INPUT NAME */}

      {name && msgContact === false ? (
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Nombre de tu contacto"
          style={styles.inputTwo}
        />
      ) : null}

      {msg && msgContact === false ? (
        <View style={styles.msgText}>
          <Text style={styles.TextAdd}>¡Se ha encontrado un usuario!</Text>
        </View>
      ) : null}

      {msgContact ? (
        <View style={styles.msgTextUser}>
          <Text style={styles.TextAdd}>
            ¡Este usuario se encuentra en tus contactos!
          </Text>
        </View>
      ) : null}

      {name && msgContact === false ? (
        <TouchableOpacity
          onPress={() => AddFriend(email, idToken, name)}
          style={styles.buttonAdd}
        >
          <Text style={styles.TextAdd}>AGREGAR CONTACTO</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonAddDisable} disabled>
          <Text style={styles.TextAdd}>AGREGAR CONTACTO</Text>
        </TouchableOpacity>
      )}
      <LinearGradient
        style={styles.ellipse}
        colors={[colors.primary, colors.secondary]}
        end={[1, 1]}
      />
    </View>
  );
};
