import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './TransactionsStyles';
import formatNumber from '../../constants/formatNumber';

export function Card(props) {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const [expanded, setExpanded] = useState(props.expanded);
  const sender =
    props.sender === props.user &&
    props.sender !== props.receiver &&
    props.type === 'Transfer';
  const receiver =
    props.sender !== props.user &&
    props.sender !== props.receiver &&
    props.type === 'Transfer';

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  useEffect(() => {
    setExpanded(false);
  }, [props]);

  return (
    <View key={props.id} style={styles.box}>
      <View style={{ alignContent: 'center' }}>
        <TouchableOpacity
          style={styles.rowButton}
          onPress={() => toggleExpand()}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}
            >
              {props.type}
            </Text>
            <Ionicons
              name={sender ? 'arrow-down' : 'arrow-up'}
              size={30}
              color={sender ? 'red' : 'green'}
            />
          </View>

          <Ionicons
            name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={30}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      {expanded && (
        <View>
          <View
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
              borderBottomColor: '#ff4b6e',
              borderBottomWidth: 2,
            }}
          />
          <View
            style={{
              marginBottom: 15,
            }}
          >
            <View style={styles.row}>
              <Text style={styles.textCardBold}>Monto: </Text>
              {sender ? (
                <Text style={styles.textCardR}>{`-$${formatNumber(
                  props.value,
                )}`}</Text>
              ) : (
                <Text style={styles.textCardG}>
                  {`+$${formatNumber(props.value)}`}{' '}
                </Text>
              )}
            </View>

            <View style={styles.row}>
              <Text style={styles.textCardBold}>Fecha: </Text>
              <Text style={styles.textCard}>
                {`${props.date.getDate()}/${
                  props.date.getMonth() + 1
                }/${props.date.getFullYear()}`}{' '}
              </Text>
            </View>
            {receiver ? (
              <View style={styles.row}>
                <Text style={styles.textCardBold}>Recibido de: </Text>
                <Text style={styles.textCard}>{props.sender} </Text>
              </View>
            ) : null}
            {sender ? (
              <View style={styles.row}>
                <Text style={styles.textCardBold}>Enviado a: </Text>
                <Text style={styles.textCard}>{props.receiver} </Text>
              </View>
            ) : null}
          </View>
        </View>
      )}
    </View>
  );
}
