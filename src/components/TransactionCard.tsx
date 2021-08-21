import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Colors = {
  PRIMARY: '#1abc9c',
  WHITE: '#ffffff',
  GREEN: '#0da935',
  LIGHTGRAY: '#C7C7C7',
  DARKGRAY: '#5E5E5E',
  CGRAY: '#ececec',
};

export function Card(props) {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text style={[styles.title]}>{props.type}</Text>
        <Ionicons
          name={expanded ? 'chevron-up-outline' : 'chevron-up-outline'}
          size={30}
          color={Colors.DARKGRAY}
        />
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && (
        <View style={styles.child}>
          <View style={styles.row}>
            <Text style={styles.textb}>Monto: </Text>
            <Text style={styles.text}>{props.value} </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.textb}>Fecha: </Text>
            <Text style={styles.text}>
              {`${props.date.getDate()}/${props.date.getMonth()}/${props.date.getFullYear()}`}{' '}
            </Text>
          </View>

          <View>
            {props.sender !== props.user &&
            props.sender !== props.receiver &&
            props.type === 'Transfer' ? (
              <View style={styles.row}>
                <Text style={styles.textb}> Recibido de: </Text>
                <Text style={styles.text}> {props.sender} </Text>
              </View>
            ) : null}

            {props.sender === props.user &&
            props.sender !== props.receiver &&
            props.type === 'Transfer' ? (
              <View style={styles.row}>
                <Text style={styles.textb}> Enviado a: </Text>
                <Text style={styles.text}> {props.receiver} </Text>
              </View>
            ) : null}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DARKGRAY,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: Colors.CGRAY,
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: '100%',
  },
  child: {
    backgroundColor: Colors.LIGHTGRAY,
    padding: 16,
  },
});
