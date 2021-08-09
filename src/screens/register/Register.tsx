import React, { useEffect, useState } from 'react';

import {
  View,
  ScrollView,
  Button,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
// import { TextInput } from '../../components/Form';
import { styles } from './RegisterStyles';

import { register } from '../../redux/actions';

export function Register() {
  const [yes, setYes] = useState<boolean>(false);
  // ESTASDOS REGISTERV2
  const dispatch = useDispatch();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const [date, setDate] = useState('false');
  const [open, setOpen] = useState(false);
  const [openT, setOpenT] = useState(false);
  const [openA, setOpenA] = useState(false);
  const [valueCountry, setValueCountry] = useState(null);
  const [value, setValue] = useState(null);
  const [valueLocalidad, setValueLocalidad] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordT, setPasswordT] = useState('');

  const [country, setCountry] = useState([
    { label: 'Argentina', value: 'ARG' },
    { label: 'Venezuela', value: 'Venezuela' },
    { label: 'Brasil', value: 'Brasil' },
    { label: 'Chile', value: 'Chile' },
    { label: 'Colombia', value: 'Colombia' },
    { label: 'Peru', value: 'Peru' },
  ]);

  const [items, setItems] = useState([
    { label: 'Tucuman', value: 'Tucuman' },
    { label: 'Buenos Aires', value: 'Buenos Aires' },
    { label: 'Neuquen', value: 'Neuquen' },
    { label: 'Salta', value: 'Salta' },
    { label: 'Rio Negro', value: 'Rio Negro' },
    { label: 'Cordoba', value: 'Cordoba' },
  ]);

  const [localidad, setLocalidad] = useState([
    { label: 'CABA', value: 'CABA' },
    { label: 'Provincia', value: 'Provincia' },
  ]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // eslint-disable-next-line no-shadow
  const handleConfirm = (date: any) => {
    // console.warn('A date has been picked: ', date);
    // console.log(date, 'date');

    setUser({ ...user, birthdate: date });
    hideDatePicker();
  };
  const [address, setAddres] = useState({
    street: '',
    number: '',
    zipCode: '',
    country: '',
    province: '',
    city: '',
  });
  useEffect(() => {
    setAddres({ ...address, country: valueCountry });
  }, [valueCountry]);

  useEffect(() => {
    setAddres({ ...address, province: value });
  }, [value]);
  useEffect(() => {
    setAddres({ ...address, city: valueLocalidad });
  }, [valueLocalidad]);
  // console.log(address);
  useEffect(() => {
    setUser({ ...user, address });
  }, [address]);
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    dni: '',
    phoneNumber: '',
    birthdate: '',
    address,
  });
  // console.log(user);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          {!yes ? (
            <View>
              <TextInput
                style={styles.inputPassword}
                onChangeText={(text: string) =>
                  setUser({ ...user, name: text })
                }
                placeholderTextColor="black"
                placeholder="Nombre"
                value={user.name}
                autoCapitalize="none"
              />

              <TextInput
                placeholderTextColor="black"
                placeholder="Apellido"
                value={user.lastName}
                onChangeText={(text: string) =>
                  setUser({ ...user, lastName: text })
                }
                // errorText={errors.password}
                autoCapitalize="none"
                style={styles.inputPassword}
              />

              <TextInput
                placeholderTextColor="black"
                placeholder="Email"
                value={user.email}
                onChangeText={(text: string) =>
                  setUser({ ...user, email: text })
                }
                autoCapitalize="none"
                style={styles.inputPassword}
                keyboardType="email-address"
              />

              <TextInput
                placeholderTextColor="black"
                placeholder="Contraseña"
                value={password}
                onChangeText={(text: string) => setPassword(text)}
                secureTextEntry
                // errorText={errors.password}
                autoCapitalize="none"
                style={styles.inputPassword}
              />

              <TextInput
                placeholderTextColor="black"
                placeholder="Repite tu contraseña"
                value={passwordT}
                onChangeText={(text: string) => setPasswordT(text)}
                secureTextEntry
                // errorText={errors.password}
                autoCapitalize="none"
                style={styles.inputPassword}
              />

              {user.name.length > 2 &&
              user.email.length > 8 &&
              password.length > 6 &&
              passwordT === password ? (
                <Button
                  onPress={() => {
                    setYes(true);
                  }}
                  title="Siguiente"
                />
              ) : null}
            </View>
          ) : (
            <View style={styles.container}>
              <Button
                onPress={() => {
                  setYes(false);
                }}
                title="Retroceder"
              />
              <ScrollView>
                <TextInput
                  placeholderTextColor="black"
                  placeholder="DNI"
                  value={user.dni}
                  onChangeText={(text: string) =>
                    setUser({ ...user, dni: text })
                  }
                  // errorText={errors.password}
                  // autoCapitalize="none"
                  style={styles.inputPassword}
                  keyboardType="numeric"
                />

                <TextInput
                  placeholderTextColor="black"
                  placeholder="Telefono"
                  value={user.phoneNumber}
                  onChangeText={(text: string) =>
                    setUser({ ...user, phoneNumber: text })
                  }
                  autoCapitalize="none"
                  style={styles.inputPassword}
                />

                <Button title="Fecha de nacimiento" onPress={showDatePicker} />

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />

                <Text>¿Donde vivis?</Text>

                <View>
                  <DropDownPicker
                    style={styles.inputPassword}
                    open={open}
                    value={address.country}
                    setOpen={setOpen}
                    items={country}
                    setItems={setCountry}
                    setValue={setValueCountry}
                  />
                </View>

                <View>
                  {valueCountry ? (
                    <DropDownPicker
                      style={styles.inputPassword}
                      open={openT}
                      value={address.province}
                      setOpen={setOpenT}
                      items={items}
                      setItems={setItems}
                      setValue={setValue}
                    />
                  ) : null}
                </View>

                <View>
                  {value ? (
                    <DropDownPicker
                      style={styles.inputPassword}
                      open={openA}
                      value={address.city}
                      setOpen={setOpenA}
                      items={localidad}
                      setItems={setLocalidad}
                      setValue={setValueLocalidad}
                    />
                  ) : null}
                </View>
                {/* {let data = } */}

                <TextInput
                  placeholderTextColor="black"
                  placeholder="Codigo Postal"
                  value={address.zipCode}
                  onChangeText={(text: string) =>
                    setAddres({ ...address, zipCode: text })
                  }
                  // errorText={errors.password}
                  autoCapitalize="none"
                  style={styles.inputPassword}
                />

                <TextInput
                  placeholderTextColor="black"
                  placeholder="Direccion NUM"
                  value={address.number}
                  onChangeText={(text: string) =>
                    setAddres({ ...address, number: text })
                  }
                  // errorText={errors.password}
                  autoCapitalize="none"
                  style={styles.inputPassword}
                  keyboardType="numeric"
                />

                <TextInput
                  placeholderTextColor="black"
                  placeholder="Direccion Calle"
                  value={address.street}
                  onChangeText={(text: string) =>
                    setAddres({ ...address, street: text })
                  }
                  autoCapitalize="none"
                  style={styles.inputPassword}
                />
                {/* {console.log(
                user.dni,
                user.numberPhone,
                user.zipCode,
                user.addressNum,
                user.address,
              )} */}

                {user.dni.length > 7 &&
                user.phoneNumber.length > 9 &&
                address.zipCode.length > 3 &&
                address.number.length > 1 &&
                address.street.length > 2 &&
                address.province !== null &&
                valueCountry !== null &&
                valueLocalidad !== null ? (
                  <Button
                    onPress={() => {
                      dispatch(register(user, password));
                    }}
                    title="REGISTRATE"
                  />
                ) : null}
              </ScrollView>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
