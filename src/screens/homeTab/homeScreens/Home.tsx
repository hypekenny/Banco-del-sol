/* eslint-disable prefer-const */
// feat-Cell-phone-compatibility

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, LogBox } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './HomeStyles';
import { setLoadingFalse, updateAccount } from '../../../redux/actions';
import { Props, RootState } from '../../../types/Types';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

// {
//   headerBackground: () => (
//     <LinearGradient
//       colors={['#ff4b6e', '#ff9349']}
//       style={{ flex: 1 }}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 0, y: 1 }}
//     />
//   ),
//   headerTintColor: '#fff',
//   headerTitle: `Hola ${userStore.name}`,
//   headerShown: true,
//   headerRight: () => (
//     <ThemeProvider theme={theme}>
//       <Button
//         onPress={() => exit()}
//         title="Cerrar Sesion"
//         type="clear"
//       />
//     </ThemeProvider>
//   ),
// }

export const Home = ({ navigation }: Props) => {
  const [ing, setIng] = useState(0);
  const [gast, setGast] = useState(0);

  const accountStore = useSelector((state: RootState) => state.account);
  const token = useSelector((state: RootState) => state.token);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.view1}>
        <Text style={{ fontSize: 20, fontWeight: '100', color: '#3b3b3b' }}>
          Balance
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 40, fontWeight: '900' }}>
            ${accountStore.balance.amount}
          </Text>
          <TouchableOpacity
            onPress={() =>
              updateAccount(accountStore.email.toLowerCase(), token, dispatch)
            }
          >
            <Ionicons
              style={styles.styleIcon}
              name="reload-circle-sharp"
              size={28}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.boxt}>
          <Text style={styles.textGeneral}>General</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <Text style={styles.text}>Ingresos</Text>
            <Text style={styles.text}>Gastos</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.textNum}>${ing}</Text>
            <Text style={styles.textNum}>${gast}</Text>
          </View>
        </View>
      </View>

      <View style={styles.view3}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.push('AddFunds')}
            style={styles.bottonRecargar}
          >
            <Ionicons style={styles.styleIcon} name="add-circle" size={28} />
            <Text style={styles.bottonTextR}>Recargar Dinero</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.push('Transfer')}
            style={styles.bottonEnviar}
          >
            <Ionicons style={styles.styleIcon1} name="send" size={28} />
            <Text style={styles.bottonTextE}>Enviar Dinero</Text>
          </TouchableOpacity>
        </View>
      </View>
      {accountStore.email && accountStore.email.length
        ? dispatch(setLoadingFalse())
        : null}
    </View>
  );
};
