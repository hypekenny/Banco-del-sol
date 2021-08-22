import React, { useEffect, useState } from 'react';
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
import { LinearGradient } from 'expo-linear-gradient';

export const Colors = {
  PRIMARY: '#1abc9c',
  WHITE: '#ffffff',
  GREEN: '#0da935',
  LIGHTGRAY: '#C7C7C7',
  DARKGRAY: '#5E5E5E',
  CGRAY: '#ececec',
};

export function Card(props) {
  // if (Platform.OS === 'android') {
  //   UIManager.setLayoutAnimationEnabledExperimental(true);
  // }
  const [expanded, setExpanded] = useState(props.expanded);

  const toggleExpand = () => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  useEffect(() => {
    setExpanded(false);
  }, [props]);

  return (
    <View key={props.id}>
      <LinearGradient
        colors={['#ff4b6e', '#ff9349']}
        style={{ flex: 1, marginLeft: 5, marginRight: 5 }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
          <Text style={[styles.title]}>{props.type}</Text>
          <Ionicons
            name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={30}
            color={Colors.WHITE}
          />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.parentHr} />
      {expanded && (
        <View style={styles.child}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
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
    color: Colors.WHITE,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    // backgroundColor: '#ff4b6e',
  },
  parentHr: {
    height: 2,
    color: Colors.DARKGRAY,
    width: '100%',
  },
  child: {
    backgroundColor: Colors.WHITE,
    padding: 16,
  },
  text: {
    fontSize: 17,
    fontWeight: '100',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  textb: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});
