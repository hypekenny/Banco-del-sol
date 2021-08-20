import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { loginStackParamList } from '../../types/Types';
import { styles } from './ContactStyles';
import { detailContact, RemoveContact } from '../../redux/actions';
import colors from '../../constants/colors';
import AwesomeAlert from 'react-native-awesome-alerts';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Contact = ({ navigation }: Props) => {
  const [contactos, setContactos] = useState<Object>([{ name: '', email: '' }]);
  const [state, setState] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const [text, setText] = useState<String>('');
  const dispatch = useDispatch();
  const contact = useSelector(state => state.Contacts);
  function clear() {
    navigation.push('HomeTab');
    dispatch(detailContact('', ''));
  }
  useEffect(() => {
    setContactos(contact);
    setShowAlert(false);
  }, [contact]);

  function detailsfn(email: string, name: string) {
    navigation.push('ContactDetails');
    dispatch(detailContact(email, name));
  }

  function filterSearch(text) {
    setText(text);
    const newData = contact.filter(function (item) {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      console.log('itemData', itemData, 'textData', textData);

      return itemData.indexOf(textData) > -1;
    });
    setContactos(newData);
    if (text.length === 0) {
      setContactos(contact);
    }
  }

  function deleteContact(email: string) {
    if (!showAlert) {
      setShowAlert(true);
      setState(email);
      return;
    }
    dispatch(RemoveContact(state));
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerOne}>
        <LinearGradient
          style={styles.header}
          colors={[colors.primary, colors.secondary]}
        />
        <View style={styles.title}>
          <Text style={styles.textTitle}>Contactos</Text>
        </View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            clear();
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
      <TextInput
        style={styles.textInput}
        placeholder="Nombre del tu contacto"
        onChangeText={search => filterSearch(search)}
        value={text}
      />
      <View style={styles.viewbtn}>
        <TouchableOpacity onPress={() => navigation.push('ContactAdd')}>
          <Ionicons
            name="ios-person-add-outline"
            size={24}
            color={colors.primary}
            style={styles.iconAdd}
          />
          <Text style={styles.textBtn}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'center',
          zIndex: 100,
          position: 'absolute',
          width: '100%',
        }}
      >
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="¿Estas seguro/a que quieres eliminar este contacto?"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          confirmText="Aceptar"
          cancelText="Cancelar"
          confirmButtonColor="#4ca64c"
          cancelButtonColor="#ff4b6e"
          onConfirmPressed={() => {
            deleteContact();
            setState('');
          }}
          onCancelPressed={() => {
            setShowAlert(false);
            setState('');
          }}
        />
      </View>
      {contactos.map((contacto: string) => {
        return contacto.name ? (
          <View>
            <TouchableOpacity
              onPress={() => detailsfn(contacto.email, contacto.name)}
              style={styles.BTNBox}
            >
              <TouchableOpacity
                onPress={
                  () => deleteContact(contacto.email)
                  // dispatch(RemoveContact(contacto.email))
                }
                style={styles.BTNRemove}
              >
                <View key={contacto.email}>
                  <Ionicons
                    name="ios-trash-outline"
                    size={24}
                    color={colors.primary}
                  />
                </View>
              </TouchableOpacity>
              <View key={contacto.email} style={styles.Box}>
                <Text style={styles.textBoxName}>{contacto.name}</Text>
                <Text style={styles.textBoxEmail}>{contacto.email}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null;
      })}

      {!contact[0] ? (
        <View style={styles.ViewDescription}>
          <Text style={styles.TextDescription}>
            Aca podras visualizar tus contactos.
          </Text>
        </View>
      ) : null}
    </View>
  );
};
