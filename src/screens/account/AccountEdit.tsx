import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { detailContact, getEmail, getName } from '../../redux/actions';
import { styles } from './AccountEditStyles';
import { loginStackParamList } from '../../types/Types';
import colors from '../../constants/colors';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export function AccountEdit({ navigation }: Props) {
  const [email, setEmail] = useState<String>('');

  return (
    <View>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Nuevo Email"
        style={styles.input}
      />
    </View>
  );
}
