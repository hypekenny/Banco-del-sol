import React from 'react';
import { View } from 'react-native';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { styles } from './AccountStyles';

function asociateCVU() {}

function shareCVU() {}

export const Account = () => (
  <View style={styles.container}>
    <Text type="header">ACCOUNT</Text>
    <Text>CVU</Text>
    <Text>00000526789452134567</Text>
    <Text>Nombre del Banco</Text>
    <Text>Banco del Sol</Text>
    <Text>Nombre del Titular</Text>
    <Text>usuario loggeado</Text>
    <Button type="outline" onPress={() => asociateCVU()}>
      Asociar CVU
    </Button>
    <Button type="outline" onPress={() => shareCVU()}>
      Compartir CVU
    </Button>
  </View>
);
