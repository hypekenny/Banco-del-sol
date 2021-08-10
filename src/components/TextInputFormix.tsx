import React from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';


export default function TextInput({ icon, error, touched, ...otherProps }) {
  const validationColor = !touched ? '#ff4b6e' : error ? '#FF0000' : '#ff4b6e';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 25,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
      }}
    >
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          {...otherProps}
        />
      </View>
      {!touched ? null : error ? <Text style={{color:'red'}}>{error}</Text> : null}
      
    </View>
  );
}
