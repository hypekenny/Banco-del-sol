import React, { useEffect, useState } from 'react';
import { View, Animated, Easing } from 'react-native';
import { useSelector } from 'react-redux';
import { Props, resFromBack } from '../../types/Types';
import { styles } from './LoadingFullStyles';

export function LoadingFull({ navigation }: Props) {
  const userStore = useSelector((state: resFromBack) => state.user);
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '3600deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: -1,
        duration: 60000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{ height: 150, width: 150, transform: [{ rotate: spin }] }}
        source={require('../../../assets/Banco-del-Sol-Logo sol.png')}
      />
      {userStore.email && userStore.email.length
        ? navigation.push('Home')
        : null}
    </View>
  );
}
