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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Entypo as Icon } from '@expo/vector-icons';



export function RegisterFormix({ navigation }: Props) {
const userStore = useSelector((state: resFromBack) => state.user);

  const FormSchema = Yup.object().shape({
    name: Yup.string().required('Requerido!').min(2, 'Invalido!'),
    lastName: Yup.string().required('Requerido!').min(2, 'Invalido!'),
    email: Yup.string().email('E-mail invalido ').required('Requerido!'),
    pass: yup
      .string()
      .required('Requerido!')
      .min(6, 'corta')
      .minNumbers(3, 'Debe contener 3 numeros')
      .minUppercase(1, 'Debe contener una mayuscula')
      .minSymbols(1, 'Debe contener un simbolo'),
    passConfirm: Yup.string()
      .required('Requerido!')
      .oneOf([Yup.ref('pass'), null], 'Deben coincidir'),
    dni: Yup.number().typeError('Debe ser un numero').required('Requerido!'),
    phoneNumber: Yup.number()
      .typeError('Debe ser un numero')
      .required('Requerido!'),
    //birthdate: Yup.date(),
    birthdate: Yup.string().required('Requerido!'),
    address: Yup.object().shape({
      street: Yup.string().required('Requerido!'),
      number: Yup.number()
        .typeError('Debe ser un numero')
        .required('Requerido!'),
      zipCode: Yup.number()
        .typeError('Debe ser un numero')
        .required('Requerido!'),
      province: Yup.string().required('Requerido!'),
      city: Yup.string().required('Requerido!'),
    }),
  });

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: FormSchema,
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
          city: '',
          province: '',
        },
      },
      onSubmit: values => console.log(values),
      /* alert(`Email: ${values.email}`), */
    });

  const [step, setStep] = useState(false);
  const dispatch = useDispatch();

  

  

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    values.birthdate = date;
    hideDatePicker();
  };

  const province = [
    { label: 'Provincia...', value: '' },
    { label: 'CABA', value: 'CABA' },
    { label: 'Buenos Aires', value: 'Buenos Aires' },
    { label: 'Catamarca', value: 'Catamarca' },
    { label: 'Chaco', value: 'Chaco' },
    { label: 'Chubut', value: 'Chubut' },
    { label: 'Córdoba', value: 'Córdoba' },
    { label: 'Corrientes', value: 'Corrientes' },
    { label: 'Entre Ríos', value: 'Entre Ríos' },
    { label: 'Jujuy', value: 'Jujuy' },
    { label: 'La Pampa', value: 'La Pampa' },
    { label: 'La Rioja', value: 'La Rioja' },
    { label: 'Mendoza', value: 'Mendoza' },
    { label: 'Misiones', value: 'Misiones' },
    { label: 'Neuquén', value: 'Neuquén' },
    { label: 'Río Negro', value: 'Río Negro' },
    { label: 'Salta', value: 'Salta' },
    { label: 'San Juan', value: 'San Juan' },
    { label: 'San Luis', value: 'San Luis' },
    { label: 'Santa Cruz', value: 'Santa Cruz' },
    { label: 'Santa Fe', value: 'Santa Fe' },
    { label: 'Santiago del Estero', value: 'Santiago del Estero' },
    { label: 'Tierra del Fuego', value: 'Tierra del Fuego' },
    { label: 'Tucumán', value: 'Tucumán' },
  ];

function send(e) {
  const { name, lastName, email, dni, phoneNumber, birthdate, address, pass } =
    values;
  const user = {
    name,
    lastName,
    email,
    dni,
    phoneNumber,
    birthdate,
    address,
  };
  dispatch(register(user, pass));
}
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
                placeholderTextColor="grey"
                placeholder="Nombre"
                autoCapitalize="none"
                onBlur={handleBlur('name')}
                error={errors.name}
                touched={touched.name}
              />
            </View>

            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="user"
                placeholderTextColor="grey"
                value={values.lastName}
                placeholder="Apellido"
                onChangeText={handleChange('lastName')}
                autoCapitalize="none"
                onBlur={handleBlur('lastName')}
                error={errors.lastName}
                touched={touched.lastName}
              />
            </View>

            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="mail"
                placeholderTextColor="grey"
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

            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="key"
                placeholderTextColor="grey"
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

            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="key"
                placeholderTextColor="grey"
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
            <View style={styles.back}>
              <TouchableOpacity onPress={() => setStep(!step)}>
                <View style={{ padding: 8 }}>
                  <Icon name={'chevron-left'} size={30} />
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="wallet"
                placeholderTextColor="grey"
                value={values.dni}
                placeholder="DNI"
                onChangeText={handleChange('dni')}
                keyboardType="numeric"
                onBlur={handleBlur('dni')}
                error={errors.dni}
                touched={touched.dni}
              />
            </View>
            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="phone"
                placeholderTextColor="grey"
                value={values.phoneNumber}
                placeholder="Telefono"
                onChangeText={handleChange('phoneNumber')}
                keyboardType="numeric"
                autoCapitalize="none"
                onBlur={handleBlur('phoneNumber')}
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
              />
            </View>

            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="phone"
                placeholderTextColor="grey"
                value={values.birthdate}
                placeholder="Nacimiento"
                onChangeText={handleChange('birthdate')}
                autoCapitalize="none"
                onBlur={handleBlur('birthdate')}
                error={errors.birthdate}
                touched={touched.birthdate}
              />
            </View>
            {/* <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TouchableOpacity
                style={styles.birthdateButton}
                onPress={showDatePicker}
              >
                <View style={{ padding: 8 }}>
                  <Icon name={'calendar'} size={16} />
                </View>
                <Text style={styles.birthdateButtonText}>Nacimiento</Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View> */}

            <View
              style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}
            >
              <TextInput
                icon="key"
                placeholderTextColor="grey"
                placeholder="Calle"
                value={values.address.street}
                onChangeText={handleChange('address.street')}
                onBlur={handleBlur('address.street')}
                error={errors.address?.street}
                touched={touched.address?.street}
              />
            </View>

            <TextInput
              icon="location"
              placeholderTextColor="grey"
              placeholder="Direccion NUM"
              onChangeText={handleChange('address.number')}
              value={values.address.number}
              autoCapitalize="none"
              keyboardType="numeric"
              onBlur={handleBlur('address.number')}
              error={errors.address?.number}
              touched={touched.address?.number}
            />

            <TextInput
              icon="location"
              placeholderTextColor="grey"
              placeholder="Codigo Postal"
              onChangeText={handleChange('address.zipCode')}
              value={values.address.zipCode}
              autoCapitalize="none"
              onBlur={handleBlur('address.zipcode')}
              error={errors.address?.zipCode}
              touched={touched.address?.zipCode}
            />

            <TextInput
              icon="address"
              placeholderTextColor="grey"
              value={values.address.city}
              placeholder="Ciudad"
              onChangeText={handleChange('address.city')}
              autoCapitalize="none"
              onBlur={handleBlur('address.city')}
              error={errors.address?.city}
              touched={touched.address?.city}
            />
            <View style={styles.inputPassword}>
              <Select
                onChange={handleChange('address.province')}
                value={values.address.province}
                options={province}
                defaultValue={province[0].value}
              />
            </View>
            {!errors.dni &&
            !errors.phoneNumber &&
            !errors.birthdate &&
            !errors.address?.street &&
            !errors.address?.number &&
            !errors.address?.zipCode &&
            !errors.address?.city &&
            !errors.address?.province ? (
              <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <TouchableOpacity
                  style={ButtonSecondaryStyle.button}
                  onPress={() => send(values)}
                >
                  <Text style={ButtonSecondaryStyle.text}>Registrarse</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <TouchableOpacity style={ButtonSecondaryStyle.buttonDisable}>
                  <Text style={ButtonSecondaryStyle.text}>Registrarse</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        {userStore.email && userStore.email.length
          ? navigation.push('Home')
          : null}
      </SafeAreaView>
    </View>
  );
}