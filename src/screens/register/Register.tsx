import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Select from 'react-select-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Entypo, AntDesign } from '@expo/vector-icons';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './RegisterStyles';
import { register } from '../../redux/actions';
import { resFromBack, Props } from '../../types/Types';
import TextInput from '../../components/TextInputFormix';
import { ButtonSecondaryStyle } from '../../constants/ButtonSecondaryStyle';
import colors from '../../constants/colors';

const yup = require('yup');

require('yup-password')(yup);

export function Register({ navigation }: Props) {
  const userStore = useSelector((state: resFromBack) => state.user);

  const FormSchema = Yup.object().shape({
    name: Yup.string().required('Debe ingresar un nombre!'),
    lastName: Yup.string().required('Debe ingresar un apellido!'),
    email: Yup.string()
      .email('E-mail invalido ')
      .required('Debe ingresar un E-Mail!'),
    pass: yup
      .string()
      .required('Debe ingresar una contraseña!!')
      .min(6, 'Minimo 6 caracteres')
      .minNumbers(3, 'Debe contener 3 numeros')
      .minUppercase(1, 'Debe contener una mayuscula')
      .minSymbols(1, 'Debe contener un simbolo'),
    passConfirm: Yup.string()
      .required('Debe confirmar la contraseña!')
      .oneOf([Yup.ref('pass'), null], 'Las contraseñas no coinciden'),
    dni: Yup.number()
      .typeError('El DNI debe ser un numero')
      .required('Debe ingresar un DNI!'),
    phoneNumber: Yup.number()
      .typeError('Debe ser un numero')
      .required('Debe ingresar un telefono!'),
    birthdate: Yup.string().required('Debe ingresar su fecha de nacimiento!'),
    address: Yup.object().shape({
      street: Yup.string().required('Debe ingresar una calle!'),
      number: Yup.number()
        .typeError('Debe ser un numero')
        .required('Debe ingresar un numero!'),
      zipCode: Yup.number()
        .typeError('Debe ser un numero')
        .required('Debe ingresar el codigo postal!'),
      province: Yup.string().required('Debe ingresar una provincia!'),
      city: Yup.string().required('Debe ingresar una ciudad!'),
    }),
  });

  const { handleChange, handleBlur, values, errors, touched } = useFormik({
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

  function send(e: any) {
    const {
      name,
      lastName,
      email,
      dni,
      phoneNumber,
      birthdate,
      address,
      pass,
    } = e;
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
    <View style={styles.containerOne}>
      <SafeAreaView style={{ flex: 1 }}>
        {!step ? (
          <View style={styles.back}>
            <TouchableOpacity onPress={() => navigation.push('StartView')}>
              <View style={{ marginLeft: 20, marginTop: 10 }}>
                <AntDesign name="arrowleft" size={35} color="white" />
              </View>
            </TouchableOpacity>
            <Text style={styles.textHeader}>Registro</Text>
          </View>
        ) : (
          <View style={styles.back}>
            <TouchableOpacity onPress={() => setStep(!step)}>
              <View style={{ marginLeft: 20, marginTop: 10 }}>
                <AntDesign name="arrowleft" size={35} color="white" />
              </View>
            </TouchableOpacity>
            <Text style={styles.textHeader}>Registro</Text>
          </View>
        )}
        <LinearGradient
          style={styles.header}
          colors={[colors.primary, colors.secondary]}
          end={[1, 1]}
        />
        {!step ? (
          <View style={styles.setpOne}>
            <View
              style={{
                paddingHorizontal: 32,
                marginBottom: 16,
                width: '100%',
              }}
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
              style={{
                paddingHorizontal: 32,
                marginBottom: 16,
                width: '100%',
              }}
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
              style={{
                paddingHorizontal: 32,
                marginBottom: 16,
                width: '100%',
              }}
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
              style={{
                paddingHorizontal: 32,
                marginBottom: 16,
                width: '100%',
              }}
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
              style={{
                paddingHorizontal: 32,
                marginBottom: 16,
                width: '100%',
              }}
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

            <View style={styles.btns}>
              {!errors.name &&
              !errors.lastName &&
              !errors.email &&
              !errors.pass &&
              !errors.passConfirm &&
              values.name ? (
                <TouchableOpacity
                  style={styles.buttonRegister}
                  onPress={() => setStep(!step)}
                >
                  <Text style={ButtonSecondaryStyle.text}>SIGUIENTE</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.next}>SIGUIENTE</Text>
                </TouchableOpacity>
              )}
            </View>
            <LinearGradient
              style={styles.ellipse}
              colors={[colors.primary, colors.secondary]}
              end={[1, 1]}
            />
          </View>
        ) : (
          <KeyboardAwareScrollView>
            <View style={styles.container}>
              <View
                style={{
                  paddingHorizontal: 32,
                  marginBottom: 16,
                  width: '100%',
                }}
              >
                <TextInput
                  icon="v-card"
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
                style={{
                  paddingHorizontal: 32,
                  marginBottom: 16,
                  width: '100%',
                }}
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
                style={{
                  paddingHorizontal: 32,
                  marginBottom: 16,
                  width: '100%',
                }}
              >
                <TextInput
                  icon="calendar"
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
              {/*    <View
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
                style={{
                  paddingHorizontal: 32,
                  marginBottom: 16,
                  width: '100%',
                }}
              >
                <TextInput
                  icon="address"
                  placeholderTextColor="grey"
                  placeholder="Calle"
                  value={values.address.street}
                  onChangeText={handleChange('address.street')}
                  onBlur={handleBlur('address.street')}
                  error={errors.address?.street}
                  touched={touched.address?.street}
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
                  icon="home"
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
                  onChangeText={handleChange('address.zipCode')}
                  value={values.address.zipCode}
                  autoCapitalize="none"
                  onBlur={handleBlur('address.zipcode')}
                  error={errors.address?.zipCode}
                  touched={touched.address?.zipCode}
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
                  value={values.address.city}
                  placeholder="Ciudad"
                  onChangeText={handleChange('address.city')}
                  autoCapitalize="none"
                  onBlur={handleBlur('address.city')}
                  error={errors.address?.city}
                  touched={touched.address?.city}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: 32,
                  marginBottom: 16,
                  width: '100%',
                }}
              >
                <View style={styles.input}>
                  <View style={{ padding: 8 }}>
                    <Entypo name="location" size={22} color="#fb6583" />
                  </View>
                  <Select
                    style={styles.input}
                    onChange={handleChange('address.province')}
                    value={values.address.province}
                    options={province}
                    defaultValue={province[0].value}
                  />
                </View>
              </View>
              {/* {!errors.dni &&
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
                <TouchableOpacity style={ButtonSecondaryStyle.buttondisabled}>
                <Text style={ButtonSecondaryStyle.text}>Registrarse</Text>
                </TouchableOpacity>
                </View>
              )} */}
              {/* aaaaaaaaaaaaaaaaaaaaaa */}
              <View style={styles.btns}>
                {!errors.dni &&
                !errors.phoneNumber &&
                !errors.birthdate &&
                !errors.address?.street &&
                !errors.address?.number &&
                !errors.address?.zipCode &&
                !errors.address?.city &&
                !errors.address?.province ? (
                  //   <TouchableOpacity
                  //   style={styles.buttonRegister}
                  //   onPress={() => send(values)}
                  // >
                  //   <Text style={ButtonSecondaryStyle.text}>Registrarse</Text>
                  // </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonRegisterTwo}
                    onPress={() => send(values)}
                  >
                    <Text style={ButtonSecondaryStyle.text}>REGISTRARSE</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.buttontwo}>
                    <Text style={styles.next}>REGISTRARSE</Text>
                  </TouchableOpacity>
                )}
              </View>
              <LinearGradient
                style={styles.ellipseTwo}
                colors={[colors.primary, colors.secondary]}
                end={[1, 1]}
              />
            </View>
          </KeyboardAwareScrollView>
        )}
        {userStore.email && userStore.email.length
          ? navigation.push('Home')
          : null}
      </SafeAreaView>
    </View>
  );
}
