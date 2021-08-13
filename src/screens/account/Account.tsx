import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './AccountStyles';
import { resFromBack } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';
import { fetchCvu } from '../../redux/actions';
import Loading from '../loading/Loading';

interface store {
  cvuAsociate: boolean;
}

export function Account() {
  const dispatch = useDispatch();
  const cvuAsociate = useSelector((state: store) => state.cvuAsociate);
  const accountDetails = useSelector((state: resFromBack) => state.account);
  const userDetails = useSelector((state: resFromBack) => state.user);

  const [associatePushed, setAssociatePushed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function asociateCVU() {
    /* Simulacion de demora de pedido a la api de 3 segundos */
    setAssociatePushed(true);
    function resolveAfter3Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 3000);
      });
    }

    async function asyncCall() {
      await resolveAfter3Seconds();
      dispatch(fetchCvu());
      setLoaded(true);
    }
    asyncCall();
  }

  function shareCVU() {
    alert('CVU copiado al portapapeles');
  }

  if (!loaded && !associatePushed) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={ButtonPrimaryStyle.button}
          onPress={() => asociateCVU()}
        >
          <View style={styles.ImageAndButton}>
            <MaterialIcons
              name="sync"
              size={32}
              color={colors.primary}
              style={{ paddingLeft: 5, paddingRight: 5 }}
            />
            <Text style={ButtonPrimaryStyle.text}>Asociar CVU</Text>
          </View>
        </TouchableOpacity>
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
      </View>
    );
  }
  if (associatePushed && !loaded) {
    return (
      <View style={styles.container}>
        <Loading />
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
      </View>
    );
  }
  if (loaded && cvuAsociate) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          style={styles.container2}
        >
          <View>
            <View style={styles.block}>
              <Text style={styles.h1}>CVU</Text>
              <Text style={styles.h2}>{accountDetails.cvu}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.h1}>Nombre del Banco</Text>
              <Text style={styles.h2}>Banco del Sol</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.h1}>Titular</Text>
              <Text
                style={styles.h2}
              >{`${userDetails.name} ${userDetails.lastName}`}</Text>
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
}
