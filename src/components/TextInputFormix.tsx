import React from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet } from 'react-native';
import { Entypo as Icon } from '@expo/vector-icons';

export default function TextInput({
  size,
  icon,
  error,
  touched,
  ...otherProps
}) {
  const validationColor = !touched ? '#fb6583' : error ? '#FF0000' : '#fe6886';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: size,
        borderRadius: 25,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,

        //marginBottom: '10%',
      }}
    >
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={validationColor} size={22} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          {...otherProps}
        />
      </View>
      {!touched ? null : error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
      ) : null}
    </View>
  );
}
