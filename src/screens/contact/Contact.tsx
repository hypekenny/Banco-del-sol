import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { styles } from './ContactStyles';
import { loginStackParamList } from '../../types/Types';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Contact = ({ navigation }: Props) => {
  return (
    <View>
      <Button
        title="Press button"
        onPress={() => navigation.push('ContactAdd')}
      />
    </View>
  );
};
