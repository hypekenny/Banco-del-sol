/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './TransitionsStyles';

export function Transitions() {
  const [money, setMoney] = useState<number>(0);
  const [moneyd, setMoneyd] = useState<number>(0);
  useEffect(() => {
    setMoney(3532.5);
    setMoneyd(3342.5);
  }, [money]);
  return (
    <View>
      <Text>Transitions</Text>
      <View>
        <Text>21 Jun</Text>
        <View>
          <Image
            style={styles.img}
            source={require('../../../assets/profile.jpg')}
          />
          <Text>Mac Donalds</Text>
          <Text>+${money}</Text>
        </View>
      </View>

      <View>
        <Text>18 Jun</Text>
        <View>
          <Image
            style={styles.img}
            source={require('../../../assets/profile.jpg')}
          />
          <Text>YPF GAS</Text>
          <Text>+{moneyd}</Text>
        </View>
      </View>
    </View>
  );
}
