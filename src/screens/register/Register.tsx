import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Select from 'react-select-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './RegisterStyles';
import { register } from '../../redux/actions';
import { resFromBack, Props } from '../../types/Types';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';

export function Register({ navigation }: Props) {
  const userStore = useSelector((state: resFromBack) => state.user);
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    dni: 0,
    phoneNumber: '',
    birthdate: '',
    address: {
      street: '',
      number: '',
      zipCode: '',
      country: '',
      province: '',
      city: '',
    },
  });

  const [step, setStep] = useState(false);
  const dispatch = useDispatch();
  const [pass, setPass] = useState({ pass: '', confirm: '' });

  const province = [
    { label: 'Provincia...', value: '' },
    { label: 'Buenos Aires', value: 'Buenos Aires' },
  ];

  const city = [
    { label: 'Localidad', value: '' },
    { label: 'CABA', value: 'CABA' },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {!step ? (
          <View>
            <TextInput
              style={styles.inputPassword}
              onChangeText={(text: string) => setUser({ ...user, name: text })}
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
              autoCapitalize="none"
              style={styles.inputPassword}
            />

            <TextInput
              placeholderTextColor="black"
              placeholder="Email"
              value={user.email}
              onChangeText={(text: string) => setUser({ ...user, email: text })}
              autoCapitalize="none"
              style={styles.inputPassword}
              keyboardType="email-address"
            />

            <TextInput
              placeholderTextColor="black"
              placeholder="Contraseña"
              value={pass.pass}
              onChangeText={(text: string) => setPass({ ...pass, pass: text })}
              secureTextEntry
              autoCapitalize="none"
              style={styles.inputPassword}
            />

            <TextInput
              placeholderTextColor="black"
              placeholder="Repite tu contraseña"
              value={pass.confirm}
              onChangeText={(text: string) =>
                setPass({ ...pass, confirm: text })
              }
              secureTextEntry
              autoCapitalize="none"
              style={styles.inputPassword}
            />

            {user.name.length > 2 &&
            user.email.length > 8 &&
            pass.pass.length > 6 &&
            pass.pass === pass.confirm ? (
              <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <TouchableOpacity
                  style={ButtonSecondaryStyle.button}
                  onPress={() => setStep(!step)}
                >
                  <Text style={ButtonSecondaryStyle.text}>Siguiente</Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        ) : (
          <View style={styles.container}>
            <View
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: -20,
                marginBottom: -30,
              }}
            >
              <TouchableOpacity
                style={ButtonSecondaryStyle.button}
                onPress={() => setStep(!step)}
              >
                <Text style={ButtonSecondaryStyle.text}>back</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              placeholderTextColor="black"
              placeholder="DNI"
              value={user.dni ? user.dni.toString() : ''}
              onChangeText={(text: string) =>
                setUser({ ...user, dni: parseInt(text, 10) })
              }
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
            <TextInput
              placeholderTextColor="black"
              placeholder="Fecha de nacimiento"
              value={user.birthdate}
              onChangeText={(text: string) =>
                setUser({ ...user, birthdate: text })
              }
              autoCapitalize="none"
              style={styles.inputPassword}
            />
            <View style={styles.inputPassword}>
              <Select
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  e.target.value.length
                    ? setUser({
                        ...user,
                        address: {
                          ...user.address,
                          province: e.target.value,
                        },
                      })
                    : null
                }
                options={province}
                value={user.address.province}
                defaultValue={province[0].value}
              />
            </View>
            <View
              style={user.address.province.length ? styles.inputPassword : null}
            >
              {user.address.province.length ? (
                <Select
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    e.target.value.length
                      ? setUser({
                          ...user,
                          address: { ...user.address, city: e.target.value },
                        })
                      : null
                  }
                  options={city}
                  value={user.address.province}
                  defaultValue={city[0].value}
                />
              ) : null}
            </View>
            <TextInput
              placeholderTextColor="black"
              placeholder="Codigo Postal"
              value={user.address.zipCode}
              onChangeText={(text: string) =>
                setUser({
                  ...user,
                  address: { ...user.address, zipCode: text },
                })
              }
              autoCapitalize="none"
              style={styles.inputPassword}
            />
            <TextInput
              placeholderTextColor="black"
              placeholder="Direccion NUM"
              value={user.address.number}
              onChangeText={(text: string) =>
                setUser({
                  ...user,
                  address: { ...user.address, number: text },
                })
              }
              autoCapitalize="none"
              style={styles.inputPassword}
              keyboardType="numeric"
            />
            <TextInput
              placeholderTextColor="black"
              placeholder="Nombre de calle"
              value={user.address.street}
              onChangeText={(text: string) =>
                setUser({
                  ...user,
                  address: { ...user.address, street: text },
                })
              }
              autoCapitalize="none"
              style={styles.inputPassword}
            />
            {user.dni.toString().length > 7 &&
            user.phoneNumber.length > 9 &&
            user.address.zipCode.length > 3 &&
            user.address.number.length > 1 &&
            user.address.street.length > 2 ? (
              <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <TouchableOpacity
                  style={ButtonSecondaryStyle.button}
                  onPress={() => dispatch(register(user, pass.pass))}
                >
                  <Text style={ButtonSecondaryStyle.text}>REGISTRATE</Text>
                </TouchableOpacity>
              </View>
            ) : null}
            {userStore.email && userStore.email.length
              ? navigation.push('Home')
              : null}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
