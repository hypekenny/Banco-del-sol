import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './AccountStyles';
import { Props, resFromBack } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';

export function Account({ navigation }: Props) {
  const accountDetails = useSelector((state: resFromBack) => state.account);
  const userDetails = useSelector((state: resFromBack) => state.user);

  function shareCVU() {
    alert('CVU copiado al portapapeles');
  }

  function editAccount() {
    navigation.push('AccountEdit');
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.container2}
      >
        <View>
          <View style={styles.titleContainer}>
            <View />
            <Text style={styles.header}>Datos</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => editAccount()}
            >
              <MaterialIcons
                name="edit"
                size={28}
                color="white"
                style={{ paddingLeft: 5 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.block}>
            <Text style={styles.h1}>Titular</Text>
            <Text
              style={styles.h2}
            >{`${userDetails.name} ${userDetails.lastName}`}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.h1}>CVU</Text>
            <Text style={styles.h2}>{accountDetails.cvu}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.h1}>Mail</Text>
            <Text style={styles.h2}>{accountDetails.email}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.h1}>Telefono</Text>
            <Text style={styles.h2}>{userDetails.phoneNumber}</Text>
          </View>
        </View>
      </LinearGradient>
      <TouchableOpacity
        style={ButtonPrimaryStyle.button}
        onPress={() => shareCVU()}
      >
        <View style={styles.ImageAndButton}>
          <MaterialIcons
            name="share"
            size={32}
            color={colors.primary}
            style={{ paddingLeft: 5, paddingRight: 5 }}
          />
          <Text style={ButtonPrimaryStyle.text}>Compartir CVU</Text>
        </View>
      </TouchableOpacity>
      <View />
    </View>
  );
}
