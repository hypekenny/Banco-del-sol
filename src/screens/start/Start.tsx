import React from 'react';
import { View, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { loginStackParamList } from '../../types/Types';
import { styles } from './StartStyles';

type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export const Start = ({ navigation }: Props) => (
  <View style={styles.container}>
    <ScrollView>
      <Text type="header">START</Text>
      <Button type="outline" onPress={() => navigation.push('Login')}>
        Login
      </Button>
      <Button type="outline" onPress={() => navigation.push('Register')}>
        Register
      </Button>
      {/* <Button type="outline" onPress={() => navigation.push('RegisterV2')}>
        RegisterV2
      </Button> */}
      <Button type="outline" onPress={() => navigation.push('Home')}>
        Home
      </Button>
      <Button type="outline" onPress={() => navigation.push('Account')}>
        Account
      </Button>
      <Button type="outline" onPress={() => navigation.push('AddFunds')}>
        AddFunds
      </Button>
      <Button type="outline" onPress={() => navigation.push('Transfer')}>
        Transfer
      </Button>
      <Button type="outline" onPress={() => navigation.push('Transactions')}>
        Transactions
      </Button>
    </ScrollView>
  </View>
);
