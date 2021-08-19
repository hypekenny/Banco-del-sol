import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  LogBox,
  Picker,
} from 'react-native';
import Select from 'react-select-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { Entypo, AntDesign } from '@expo/vector-icons';
import * as Yup from 'yup';
//  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import {
  cleanErrors,
  register,
  setLoadingFalse,
  setLoadingTrue,
} from '../../redux/actions';
import { resFromBack, Props, RootState } from '../../types/Types';
import TextInput from '../../components/TextInputFormix';
import colors from '../../constants/colors';
import { styles } from './RegisterStyles';
import { LoadingFull } from '../loading2/LoadingFull';
import { ErrorStyle } from '../../constants/ErrorStyle';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //  Ignore all log notifications

const yup = require('yup');

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const size1 = 50;
export const size2 = (deviceHeight - 70 - 150 - 180) / 8;

require('yup-password')(yup);

export function Register({ navigation }: Props) {
  const userStore = useSelector((state: resFromBack) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.errors);

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
    birthdate: Yup.string().required('Ingrese fecha de nacimiento!'),
    address: Yup.object().shape({
      street: Yup.string().required('Debe ingresar una calle!'),
      number: Yup.number()
        .typeError('Debe ser un numero')
        .required('Debe ingresar un numero!'),
      zipCode: Yup.number()
        .typeError('Debe ser un numero')
        .required('Debe ingresar el codigo postal!'),
      city: Yup.string().required('Debe ingresar una ciudad!'),
      province: Yup.string().required('Debe ingresar una provincia!'),
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

  const [selectedValue, setSelectedValue] = useState('java');
  const handleConfirmProvince = provincia => {
    values.address.province = provincia;
  };

  const [step, setStep] = useState(false);
  const dispatch = useDispatch();

  /* const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    values.birthdate = date;
    hideDatePicker();
  }; */

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
    dispatch(setLoadingTrue());
  }

  if (error.length) {
    dispatch(setLoadingFalse());
    setTimeout(() => {
      dispatch(cleanErrors());
    }, 3000);
  }
  return (
    <View style={styles.view}>
      <LoadingFull show={loading} />
      {error.length ? (
        <View style={ErrorStyle.errorView}>
          <Text style={ErrorStyle.errorText}>{error}</Text>
        </View>
      ) : null}
      <LinearGradient
        style={styles.header}
        colors={[colors.primary, colors.secondary]}
        end={[1, 1]}
      />
      <View style={styles.title}>
        <Text style={styles.textTitle}>Registro</Text>
      </View>
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          if (!step) {
            navigation.push('StartView');
          } else {
            setStep(!step);
          }
        }}
      >
        <AntDesign name="arrowleft" size={35} color="white" />
      </TouchableOpacity>
      {/* <View style={styles.linea1}></View>
      <View style={!step ? styles.linea2 : styles.linea2s}></View> */}
      {!step ? (
        <View style={styles.container1}>
          <View
            style={{
              paddingHorizontal: 32,
              marginBottom: 16,
              width: '100%',
            }}
          >
            <TextInput
              size={size1}
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
              size={size1}
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
              size={size1}
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
              size={size1}
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
              size={size1}
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
        </View>
      ) : (
        <View style={styles.container2}>
          <View
            style={{
              paddingHorizontal: 32,
              marginBottom: 16,
              width: '100%',
            }}
          >
            <TextInput
              size={size2}
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
              size={size2}
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
              size={size2}
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
              size={size2}
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
              size={size2}
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: size2,
                borderRadius: 25,
                borderColor: '#fb6583',
                borderWidth: StyleSheet.hairlineWidth,
                padding: 8,
              }}
            >
              <View style={{ padding: 8 }}>
                <Entypo name="location" size={22} color="#fb6583" />
              </View>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedValue(itemValue);
                  handleConfirmProvince(itemValue);
                }}
              >
                {pickerItems}
              </Picker>
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
              size={size2}
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
              size={size2}
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
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: size2,
                borderRadius: 25,
                borderColor: '#fb6583',
                borderWidth: StyleSheet.hairlineWidth,
                padding: 8,
              }}
            >
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
            </View> */}
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
        </View>
      )}
      <View style={styles.btns}>
        {!step ? (
          <TouchableOpacity
            style={
              !errors.name &&
              !errors.lastName &&
              !errors.email &&
              !errors.pass &&
              !errors.passConfirm &&
              values.name
                ? styles.button
                : styles.buttonDisable
            }
            onPress={() => {
              if (
                !errors.name &&
                !errors.lastName &&
                !errors.email &&
                !errors.pass &&
                !errors.passConfirm &&
                values.name
              ) {
                setStep(!step);
              } else {
                console.log('Revise el formulario');
              }
            }}
          >
            <Text style={styles.textButton}>SIGUIENTE</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={
              !errors.dni &&
              !errors.phoneNumber &&
              !errors.birthdate &&
              !errors.address?.street &&
              !errors.address?.number &&
              !errors.address?.zipCode &&
              !errors.address?.city &&
              !errors.address?.province
                ? styles.button
                : styles.buttonDisable
            }
            onPress={() => {
              if (
                !errors.dni &&
                !errors.phoneNumber &&
                !errors.birthdate &&
                !errors.address?.street &&
                !errors.address?.number &&
                !errors.address?.zipCode &&
                !errors.address?.city &&
                !errors.address?.province
              ) {
                console.log(`${values.name} se ha registrado exitosamente`);
                send(values);
              } else {
                console.log('Revise el formulario');
              }
            }}
          >
            <Text style={styles.textButton}>REGISTRAR</Text>
          </TouchableOpacity>
        )}
      </View>
      <LinearGradient
        style={styles.footer}
        colors={[colors.primary, colors.secondary]}
        end={[1, 1]}
      />
      {userStore.email && userStore.email.length
        ? navigation.push('HomeTab')
        : null}
    </View>
  );
}
