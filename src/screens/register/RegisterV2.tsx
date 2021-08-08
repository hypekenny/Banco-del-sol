// import React, { useState, useEffect } from 'react';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { useDispatch } from 'react-redux';
// import { Button, Text, View, ScrollView } from 'react-native';
// import { register } from '../../redux/actions';

// import { TextInput } from '../../components/Form';
// import { styles } from './RegisterStyles';

// // ep 11 / 12
// export function RegisterV2({ email, pass }) {
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

//         <Button title="Fecha de nacimiento" onPress={showDatePicker} />

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
//               dispatch(register(correo, password));
//             }}
//             title="REGISTRATE"
//           />
//         ) : null}
//       </ScrollView>
//     </View>
//   );
// }
