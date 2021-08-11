import React, { useEffect, useState } from 'react';
import { View, Animated, Easing } from 'react-native';
import { styles } from './LoadingStyles';

export default function Loading() {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: -1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
        source={require('../../../assets/Banco-del-Sol-Logo sol.png')}
      />
    </View>
  );
}
