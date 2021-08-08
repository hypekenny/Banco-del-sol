import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';

import { Button, Text, View } from 'react-native';
import { TextInput } from '../../components/Form';
import { styles } from './RegisterStyles';

// ep 11 / 12
export function RegisterV2() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('false');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Tucuman', value: 'Tucuman' },
    { label: 'Buenos Aires', value: 'Buenos Aires' },
    { label: 'Neuquen', value: 'Neuquen' },
    { label: 'Salta', value: 'Salta' },
    { label: 'Rio Negro', value: 'Rio Negro' },
    { label: 'Cordoba', value: 'Cordoba' },
  ]);

  console.log(date);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn('A date has been picked: ', date);
    setDate(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label=""
        placeholderTextColor="black"
        placeholder="DNI"
        // value={pasaport}
        // onChangeText={(text: string) => setPasaport(text)}
        secureTextEntry
        // errorText={errors.password}
        autoCapitalize="none"
        style={styles.inputPassword}
      />

      <TextInput
        label=""
        placeholderTextColor="black"
        placeholder="Telefono"
        // value={password}
        // onChangeText={(text: string) => setPassword(text)}
        secureTextEntry
        // errorText={errors.password}
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
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Codigo Postal"
          // value={password}
          // onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Direccion NUM"
          // value={password}
          // onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />

        <TextInput
          label=""
          placeholderTextColor="black"
          placeholder="Direccion Calle"
          // value={password}
          // onChangeText={(text: string) => setPassword(text)}
          secureTextEntry
          // errorText={errors.password}
          autoCapitalize="none"
          style={styles.inputPassword}
        />
      </View>
    </View>
  );
}
