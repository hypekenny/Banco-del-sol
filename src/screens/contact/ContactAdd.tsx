import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './ContactStyles';

export const ContactAdd = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.containerAdd}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Email de tu contacto"
      />
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Nombre de tu contacto"
      />
    </View>
  );
};
