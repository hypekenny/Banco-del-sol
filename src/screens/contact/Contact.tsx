import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
// import { styles } from './ContactStyles';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { loginStackParamList } from '../../types/Types';
import { styles } from './ContactStyles';
import { detailContact } from '../../redux/actions';
import colors from '../../constants/colors';

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
      <View style={styles.headerOne}>
        <LinearGradient
          style={styles.header}
          colors={[colors.primary, colors.secondary]}
          end={[1, 1]}
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
      <View style={styles.viewbtn}>
        <TouchableOpacity
          onPress={() => navigation.push('ContactAdd')}
          style={styles.button}
        >
          <Ionicons
            name="ios-person-add-outline"
            size={24}
            color={colors.primary}
            style={styles.iconAdd}
          />
          <Text style={styles.textBtn}>Agregar</Text>
        </TouchableOpacity>
      </View>
      {contact.map((contacto, i: number) => {
        return contacto.name ? (
          <View>
            <TouchableOpacity
              onPress={() => detailsfn(contacto.email, contacto.name)}
            >
              <View key={i} style={styles.Box}>
                <Text style={styles.textBox}>{contacto.email}</Text>
                <Text style={styles.textBox}>{contacto.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.TextDescription}>
            <Text style={styles.TextDescription}>
              Aca podras visualizar tus contactos en el caso de haber agregado.
            </Text>
          </View>
        );
      })}
      {!contact ? (
        <View style={styles.TextDescription}>
          <Text style={styles.TextDescription}>
            Aca podras visualizar tus contactos en el caso de haber agregado.
          </Text>
        </View>
      ) : null}
    </View>
  );
};
