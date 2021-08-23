import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ActivityIndicator,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export function LoadingFull(props: any) {
  const { show = false } = props;

  return (
    <Modal transparent={true} animationType="none" visible={show}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `rgba(0,0,0,0.6)`,
        }}
      >
        <View
          style={{
            padding: 13,
            borderRadius: 13,
          }}
        >
          <ActivityIndicator animating={show} color="black" size="large" />
        </View>
      </View>
    </Modal>
  );
}
