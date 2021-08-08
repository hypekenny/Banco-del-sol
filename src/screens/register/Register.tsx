import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RegisterV2 } from './RegisterV2';
// import { useDispatch } from 'react-redux';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from '../../components/Form';
import { styles } from './RegisterStyles';
import { loginStackParamList } from '../../types/Types';
import { Button } from '../../components/Button';

// import { register } from '../../redux/actions';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export function Register({ navigation }: Props) {
  const [yes, setYes] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  const [lastName, setLastName] = useState<string>('');

  const [email, setEmail] = useState<string>('');

  const [pass, setPass] = useState<string>('');

  const [passT, setPassT] = useState<string>('');
  // console.log(passT.length);

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Nombre"
          value={name}
          onChangeText={(text: string) => setName(text)}
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Apellido"
          value={lastName}
          onChangeText={(text: string) => setLastName(text)}
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Email"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          autoCapitalize="none"
          style={styles.inputPassword}
          keyboardType="email-address"
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Contraseña"
          value={pass}
          onChangeText={(text: string) => setPass(text)}
          secureTextEntry
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Repite tu contraseña"
          value={passT}
          onChangeText={(text: string) => setPassT(text)}
          secureTextEntry
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        {name.length > 2 &&
        email.length > 8 &&
        pass.length > 6 &&
        pass === passT ? (
          <Button type="outline" onPress={() => setYes(true)}>
            RegisterV2
          </Button>
        ) : null}

        {yes ? (
          <View>
            <RegisterV2 email={email} pass={pass} />
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}

// export function RegisterV2() {
//   const dispatch = useDispatch();
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [date, setDate] = useState('false');
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     { label: 'Tucuman', value: 'Tucuman' },
//     { label: 'Buenos Aires', value: 'Buenos Aires' },
//     { label: 'Neuquen', value: 'Neuquen' },
//     { label: 'Salta', value: 'Salta' },
//     { label: 'Rio Negro', value: 'Rio Negro' },
//     { label: 'Cordoba', value: 'Cordoba' },
//   ]);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   // eslint-disable-next-line no-shadow
//   const handleConfirm = (date: React.SetStateAction<string>) => {
//     // console.warn('A date has been picked: ', date);
//     setDate(date);
//     hideDatePicker();
//   };
//   // Estados FORMULARIO

//   const [dni, setDni] = useState<string>('');

//   const [numberPhone, setNumberPhone] = useState<string>('');

//   const [zipCode, setZipCode] = useState<string>('');

//   const [addressNum, setAddressNum] = useState<string>('');

//   const [address, setAddress] = useState<string>('');
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <TextInput
//           label=""
//           placeholderTextColor="black"
//           placeholder="DNI"
//           value={dni}
//           onChangeText={(text: string) => setDni(text)}
//           // secureTextEntry
//           // errorText={errors.password}
//           // autoCapitalize="none"
//           style={styles.inputPassword}
//           keyboardType="numeric"
//         />

//         <TextInput
//           label=""
//           placeholderTextColor="black"
//           placeholder="Telefono"
//           value={numberPhone}
//           onChangeText={(text: string) => setNumberPhone(text)}
//           secureTextEntry
//           autoCapitalize="none"
//           style={styles.inputPassword}
//         />
//         <Button type="outline" onPress={() => showDatePicker}>
//           Fecha de nacimiento
//         </Button>
//         {/* <Button title="Fecha de nacimiento" onPress={showDatePicker} /> */}

//         <DateTimePickerModal
//           isVisible={isDatePickerVisible}
//           mode="date"
//           onConfirm={() => handleConfirm}
//           onCancel={hideDatePicker}
//         />

//         <Text>¿Donde vivis?</Text>

//         <View>
//           <DropDownPicker
//             open={open}
//             value={value}
//             items={items}
//             setOpen={setOpen}
//             setValue={setValue}
//             setItems={setItems}
//           />
//         </View>

//         <TextInput
//           label=""
//           placeholderTextColor="black"
//           placeholder="Codigo Postal"
//           value={zipCode}
//           onChangeText={(text: string) => setZipCode(text)}
//           // errorText={errors.password}
//           autoCapitalize="none"
//           style={styles.inputPassword}
//         />

//         <TextInput
//           label=""
//           placeholderTextColor="black"
//           placeholder="Direccion NUM"
//           value={addressNum}
//           onChangeText={(text: string) => setAddressNum(text)}
//           // errorText={errors.password}
//           autoCapitalize="none"
//           style={styles.inputPassword}
//           keyboardType="numeric"
//         />

//         <TextInput
//           label=""
//           placeholderTextColor="black"
//           placeholder="Direccion Calle"
//           value={address}
//           onChangeText={(text: string) => setAddress(text)}
//           autoCapitalize="none"
//           style={styles.inputPassword}
//         />

//         {dni.length > 7 &&
//         numberPhone.length > 9 &&
//         zipCode.length > 3 &&
//         addressNum.length > 1 &&
//         address.length > 2 &&
//         value !== null &&
//         date ? (
//           <Button
//             onPress={() => {
//               dispatch(register(email, pass));
//             }}
//             title="REGISTRATE"
//           />
//         ) : null}
//       </ScrollView>
//     </View>
//   );
// }

// email;
// pass;
