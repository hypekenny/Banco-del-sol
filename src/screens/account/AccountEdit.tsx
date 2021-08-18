import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Picker } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import { styles } from './AccountEditStyles';
import { loginStackParamList, resFromBack } from '../../types/Types';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import colors from '../../constants/colors';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export function AccountEdit({ navigation }: Props) {
  const userDetails = useSelector((state: resFromBack) => state.user);
  const [email, setEmail] = useState<String>(userDetails.email);
  const [phone, setPhone] = useState<String>(userDetails.phoneNumber);
  const [street, setStreet] = useState<String>(userDetails.address.street);
  const [number, setNumber] = useState<String>(userDetails.address.number);
  const [zipCode, setZipCode] = useState<String>(userDetails.address.zipCode);
  const [city, setCity] = useState<String>(userDetails.address.city);

  const provinces = [
    'Provincia...',
    'CABA',
    'Buenos Aires',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Río Negro',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'Tierra del Fuego',
    'Tucumán',
  ];

  let pickerItems = provinces.map(p => <Picker.Item label={p} value={p} />);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Nuevo Email"
        style={styles.input}
      />
      <TextInput
        onChangeText={setPhone}
        value={phone}
        placeholder="Telefono"
        style={styles.input}
      />
      <TextInput
        icon="address"
        onChangeText={setStreet}
        placeholder="Calle"
        value={street}
        style={styles.input}
      />
      <TextInput
        icon="home"
        placeholder="Direccion NUM"
        value={number}
        onChangeText={setNumber}
        style={styles.input}
      />
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 25,
            borderColor: '#fb6583',
            padding: 8,
          }}
        >
          <View style={{ padding: 8 }}>
            <Entypo name="location" size={22} color="#fb6583" />
          </View>
          <Picker>{pickerItems}</Picker>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <TextInput
          icon="location"
          placeholderTextColor="grey"
          placeholder="Codigo Postal"
          onChangeText={setZipCode}
          value={zipCode}
          style={styles.input}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          marginBottom: 16,
          width: '100%',
        }}
      >
        <TextInput
          icon="location-pin"
          placeholderTextColor="grey"
          value={city}
          onChangeText={setCity}
          placeholder="Ciudad"
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={() => shareCVU()}>
        <LinearGradient
          style={ButtonPrimaryStyle.gradientButton}
          colors={[colors.primary, colors.secondary]}
        >
          <Text style={ButtonPrimaryStyle.whiteText}>ACTUALIZAR</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
