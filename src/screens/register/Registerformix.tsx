import React, { useState, useRef } from 'react';
import {
  View,
  Button,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Select from 'react-select-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './RegisterStyles';
import { register } from '../../redux/actions';
import { resFromBack, Props } from '../../types/Types';
import TextInput from '../../components/TextInputFormix'
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const yup = require('yup');
require('yup-password')(yup);

export function RegisterFormix({ navigation }: Props) {
  const userStore = useSelector((state: resFromBack) => state.user);

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required('Ingrese un nombre').min(2, 'Too Short!'),
    lastName: Yup.string().required('Required').min(2, 'Too Short!'),
    email: Yup.string().email('Invalid email').required('Required'),
    pass: yup
      .string()
      .required('Please Enter your password')
      .minNumbers(3, 'un numero')
      .minUppercase(1, 'una mayuscula')
      .minSymbols(1, 'un simbolo'),
    passConfirm: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('pass'), null], 'Passwords must match'),
    dni: yup
      .string()
      .required('Required')
      .max(8, 'Debe ser un numero de 8 digitos')
      .minNumbers(8, 'Debe ser un numero de 8 digitos'),
    phoneNumber: yup.string().required('Required').min(8),
    birthdate: Yup.date(),
  });

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: {
        name: '',
        lastName: '',
        email: '',
        pass: '',
        passConfirm: '',
        dni: '',
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
      },
      onSubmit: values => console.log(values),
      /* alert(`Email: ${values.email}`), */
    });

  const [step, setStep] = useState(false);
  const dispatch = useDispatch();

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
            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="user"
                value={values.name}
                onChangeText={handleChange('name')}
                placeholderTextColor="black"
                placeholder="Nombre"
                autoCapitalize="none"
                onBlur={handleBlur('name')}
                error={errors.name}
                touched={touched.name}
              />
            </View>
            {errors.name ? (
              <Text style={styles.textError}>{errors.name}</Text>
            ) : null}

            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="user"
                placeholderTextColor="black"
                value={values.lastName}
                placeholder="Apellido"
                onChangeText={handleChange('lastName')}
                autoCapitalize="none"
                onBlur={handleBlur('lastName')}
                error={errors.lastName}
                touched={touched.lastName}
              />
            </View>
            {errors.lastName ? (
              <Text style={styles.textError}>{errors.lastName}</Text>
            ) : null}
            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="mail"
                placeholderTextColor="black"
                value={values.email}
                placeholder="Email"
                onChangeText={handleChange('email')}
                autoCapitalize="none"
                keyboardType="email-address"
                onBlur={handleBlur('email')}
                error={errors.email}
                touched={touched.email}
              />
            </View>
            {errors.email ? (
              <Text style={styles.textError}>{errors.email}</Text>
            ) : null}
            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="key"
                placeholderTextColor="black"
                placeholder="Contraseña"
                value={values.pass}
                onChangeText={handleChange('pass')}
                secureTextEntry
                autoCapitalize="none"
                onBlur={handleBlur('pass')}
                error={errors.pass}
                touched={touched.pass}
              />
            </View>
            {errors.pass ? (
              <Text style={styles.textError}>{errors.pass}</Text>
            ) : null}
            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="key"
                placeholderTextColor="black"
                placeholder="Repite tu contraseña"
                value={values.passConfirm}
                onChangeText={handleChange('passConfirm')}
                secureTextEntry
                autoCapitalize="none"
                onBlur={handleBlur('passConfirm')}
                error={errors.passConfirm}
                touched={touched.passConfirm}
              />
            </View>
            {errors.passConfirm ? (
              <Text style={styles.textError}>{errors.passConfirm}</Text>
            ) : null}

            {!errors.name &&
            !errors.lastName &&
            !errors.email &&
            !errors.pass &&
            !errors.passConfirm &&
            values.name ? (
              <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <TouchableOpacity
                  style={ButtonSecondaryStyle.button}
                  onPress={() => setStep(!step)}
                >
                  <Text style={ButtonSecondaryStyle.text}>Siguiente</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <TouchableOpacity style={ButtonSecondaryStyle.buttonDisable}>
                  <Text style={ButtonSecondaryStyle.text}>Siguiente</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.container}>
            <View
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 0,
                marginBottom: 0,
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
              icon="wallet"
              placeholderTextColor="black"
              value={values.dni}
              placeholder="DNI"
              onChangeText={handleChange('dni')}
              keyboardType="numeric"
              onBlur={handleBlur('dni')}
              error={errors.dni}
              touched={touched.dni}
            />
            {errors.dni ? (
              <Text style={styles.textError}>{errors.dni}</Text>
            ) : null}
            <TextInput
              icon="phone"
              placeholderTextColor="black"
              value={values.phoneNumber}
              placeholder="Telefono"
              onChangeText={handleChange('phoneNumber')}
              autoCapitalize="none"
              onBlur={handleBlur('phoneNumber')}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />
            {errors.phoneNumber ? (
              <Text style={styles.textError}>{errors.phoneNumber}</Text>
            ) : null}
            <TextInput
              icon="calendar"
              placeholderTextColor="black"
              value={values.birthdate}
              placeholder="Fecha de nacimiento (DD/MM/AAAA)"
              onChangeText={handleChange('birthdate')}
              autoCapitalize="none"
              onBlur={handleBlur('birthdate')}
              error={errors.birthdate}
              touched={touched.birthdate}
            />
            {errors.birthdate ? (
              <Text style={styles.textError}>{errors.birthdate}</Text>
            ) : null}

            <View style={styles.inputPassword}>
              <Select
                onChange={handleChange('province')}
                options={province}
                defaultValue={province[0].value}
              />
            </View>
            <View style={styles.inputPassword}>
              <Select
                onChange={handleChange('city')}
                options={city}
                defaultValue={city[0].value}
              />
            </View>
            <TextInput
              icon="location"
              placeholderTextColor="black"
              placeholder="Codigo Postal"
              onChangeText={handleChange('zipCode')}
              autoCapitalize="none"
            />
            <TextInput
              icon="location"
              placeholderTextColor="black"
              placeholder="Direccion NUM"
              onChangeText={handleChange('number')}
              autoCapitalize="none"
              keyboardType="numeric"
            />
            <TextInput
              icon="location"
              placeholderTextColor="black"
              placeholder="Nombre de calle"
              onChangeText={handleChange('street')}
              autoCapitalize="none"
            />
          </View>
        )}
        {/* <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <TouchableOpacity
            style={ButtonSecondaryStyle.button}
            onPress={handleSubmit}
          >
            <Text style={ButtonSecondaryStyle.text}>REGISTRATE</Text>
          </TouchableOpacity>
        </View> */}
        {/* {userStore.email && userStore.email.length
              ? navigation.push('Home')
              : null}
          </View> 
        )} */}
      </SafeAreaView>
    </View>
  );
}
