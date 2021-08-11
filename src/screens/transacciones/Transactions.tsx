/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './TransactionsStyles';

export function Transactions() {
  const [money, setMoney] = useState<number>(0);
  const [moneyd, setMoneyd] = useState<number>(0);
  useEffect(() => {
    setMoney(3532.5);
    setMoneyd(3342.5);
  }, [money]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.boxin}>
            <Text style={styles.boxt}>21 Jun</Text>
            <Image
              style={styles.img}
              source={require('../../../assets/profile.jpg')}
            />
            <View style={styles.boxdetailsin}>
              <View style={styles.boxdetails}>
                <Text style={styles.textgast}>Mac Donalds</Text>
                <Text style={styles.textgastn}>+${money}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.boxin}>
            <Text style={styles.boxt}>21 Jun</Text>
            <Image
              style={styles.img}
              source={require('../../../assets/profile.jpg')}
            />
            <View style={styles.boxdetailsin}>
              <View style={styles.boxdetails}>
                <Text style={styles.textgast}>Mac Donalds</Text>
                <Text style={styles.textgastn}>-${moneyd}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.boxin}>
            <Text style={styles.boxt}>21 Jun</Text>
            <Image
              style={styles.img}
              source={require('../../../assets/profile.jpg')}
            />
            <View style={styles.boxdetailsin}>
              <View style={styles.boxdetails}>
                <Text style={styles.textgast}>Mac Donalds</Text>
                <Text style={styles.textgastn}>-${moneyd}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.boxin}>
            <Text style={styles.boxt}>21 Jun</Text>
            <Image
              style={styles.img}
              source={require('../../../assets/profile.jpg')}
            />
            <View style={styles.boxdetailsin}>
              <View style={styles.boxdetails}>
                <Text style={styles.textgast}>Mac Donalds</Text>
                <Text style={styles.textgastn}>-${moneyd}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
