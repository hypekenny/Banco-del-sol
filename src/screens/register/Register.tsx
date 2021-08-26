import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  LogBox,
  Picker,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
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

  const [state, setState] = useState(false);

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .required('Ingrese un nombre')
      .matches(/^[a-zA-Z ]*$/, 'Nombre inválido'),
    lastName: Yup.string()
      .required('Ingrese un apellido')
      .matches(/^[a-zA-Z ]*$/, 'Apellido inválido'),
    email: Yup.string().email('Correo inválido').required('Ingrese un correo'),
    pass: yup
      .string()
      .required('Ingrese una contraseña')
      .min(6, 'Mínimo 6 caracteres')
      .minNumbers(3, 'Debe contener 3 números')
      .minUppercase(1, 'Debe contener mayúsculas')
      .minSymbols(1, 'Debe contener símbolos'),
    passConfirm: Yup.string()
      .required('Confirme la contraseña')
      .oneOf([Yup.ref('pass'), null], 'Deben coincidir'),
    dni: Yup.string()
      .required('Ingrese un DNI')
      .min(6, 'Mínimo 6 números')
      .max(10, 'Máximo 10 números')
      .matches(/^[0-9]*$/, 'Debe ser un número'),
    phoneNumber: Yup.number()
      .typeError('Debe ser un número')
      .required('Ingrese un teléfono')
      .min(999999, 'Mínimo 7 números')
      .max(999999999999, 'Máximo 12 números'),
    birthdate: Yup.string()
      .required('Ingrese una fecha')
      .matches(
        /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/,
        'Fecha inválida',
      ),
    address: Yup.object().shape({
      street: Yup.string()
        .required('Ingrese una calle')
        .max(20, 'Máximo 20 caracteres'),
      number: Yup.string()
        .required('Ingrese un número')
        .max(5, 'Máximo 5 números')
        .matches(/^[0-9]*$/, 'Debe ser un número'),
      zipCode: Yup.string()
        .required('Ingrese codigo postal')
        .max(5, 'Máximo 5 caracteres')
        .matches(/^[0-9]*$/, 'Debe ser un número'),
      city: Yup.string()
        .required('Ingrese una ciudad')
        .max(30, 'Máximo 30 caracteres'),
      province: Yup.string()
        .required('Ingrese una provincia')
        .matches(/^[a-zA-Z ]*$/, 'Provincia inválida'),
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
  });
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
  const pickerItems = provinces.map(p => <Picker.Item label={p} value={p} />);

  const [selectedValue, setSelectedValue] = useState();

  function handleConfirmProvince(provincia: string) {
    values.address.province = provincia;
  }
  const [step, setStep] = useState(false);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (error.length) {
      setState(true);
    }
  }, [error.length]);

  if (error.length) {
    dispatch(setLoadingFalse());
  }

  return (
    <View style={styles.view}>
      <LoadingFull show={loading} />
      <LinearGradient
        style={styles.header}
        colors={[colors.primary, colors.secondary]}
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

      <View
        style={{
          marginTop: '100%',
          zIndex: 100,
          position: 'absolute',
          width: '100%',
        }}
      >
        <AwesomeAlert
          show={state}
          showProgress={false}
          title={error}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="Aceptar"
          confirmButtonColor="#ff4b6e"
          onConfirmPressed={() => {
            setState(false);
            dispatch(cleanErrors());
          }}
        />
      </View>
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
              placeholder="Correo"
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
              placeholder="Nacimiento (DD/MM/AAAA)"
              onChangeText={handleChange('birthdate')}
              autoCapitalize="none"
              onBlur={handleBlur('birthdate')}
              error={errors.birthdate}
              touched={touched.birthdate}
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
                borderWidth: 2,
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
              value={values.address.zipCode}
              onChangeText={handleChange('address.zipCode')}
              autoCapitalize="none"
              onBlur={handleBlur('address.zipCode')}
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
                send(values);
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
