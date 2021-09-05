import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import { styles } from './TransferStyles';
import { Props, RootState } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';
import { addFunds, setTranMsgFalse } from '../../redux/actions';
import { LoadingFull } from '../loading2/LoadingFull';
import { StylesCon } from '../../constants/Styles';
import { stylesAbout } from '../login/AboutStyles';

export const Transfer = ({ navigation }: Props) => {
  const accountStore = useSelector((state: RootState) => state.account);
  const userStore = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);
  const loading = useSelector((state: RootState) => state.loading);
  const transactionMsg = useSelector(
    (state: RootState) => state.transactionMsg,
  );
  const ContactDetails = useSelector(
    (state: RootState) => state.DetailTransfer,
  );
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    amount: 0,
    comment: '',
  });

  useEffect(() => {
    if (ContactDetails.email) {
      setData({ ...data, email: ContactDetails.email });
    }
  }, []);

  return (
    <View style={StylesCon.phone}>
      <img
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880917630180028436/Banco-del-Sol-Background_Web.png"
        alt=""
      />
      <View style={stylesAbout.about}>
        <TouchableOpacity style={stylesAbout.btnAbout}>
          <Text style={stylesAbout.btnText}>Sobre Nosotros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesAbout.btnAbout}>
          <Text style={stylesAbout.btnText}>Administrador</Text>
        </TouchableOpacity>

        <View style={{ width: '100%', alignItems: 'center', bottom: 0 }}>
          <Image
            style={stylesAbout.tinyLogo}
            source={{
              uri: 'https://media.discordapp.net/attachments/872492726397042688/874643755158892594/Banco-del-Sol-Logo.png',
            }}
          />
        </View>
      </View>
      <img
        style={{
          width: 411,
          height: 813,
          position: 'absolute',
          alignSelf: 'center',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880174589605478400/Mockup_-_android_-_BDS_app.png"
        alt=""
      />
      <View style={StylesCon.filler} />
      <View style={styles.container}>
        {/* esto es el alert para las transacciones */}
        <View
          style={{
            marginTop: '100%',
            zIndex: 100,
            position: 'absolute',
            width: '100%',
          }}
        >
          <AwesomeAlert
            show={transactionMsg.state}
            showProgress={false}
            title={transactionMsg.msg}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton
            confirmText="Aceptar"
            confirmButtonColor="green"
            onConfirmPressed={() => {
              dispatch(setTranMsgFalse());
            }}
          />
        </View>
        <LoadingFull show={loading} />

        <View>
          <LinearGradient
            style={styles.header}
            colors={[colors.primary, colors.secondary]}
          />
          <View style={StylesCon.title}>
            <Text style={StylesCon.textTitle}>Enviar dinero</Text>
          </View>
          <TouchableOpacity
            style={StylesCon.back}
            onPress={() => {
              navigation.push('HomeTab');
            }}
          >
            <AntDesign
              name="arrowleft"
              size={35}
              color="white"
              style={StylesCon.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'space-between', height: '50%' }}>
          <TextInput
            placeholder="Ingresá email..."
            placeholderTextColor="grey"
            value={data.email}
            onChangeText={(text: string) => setData({ ...data, email: text })}
            keyboardType="email-address"
            style={ButtonPrimaryStyle.input}
          />
          <View>
            <Text style={styles.maxBalanceText}>
              SALDO ${accountStore.balance.amount}
            </Text>
            <TextInput
              value={`$${data.amount.toString()}`}
              onChangeText={(text: string) => {
                if (text.substring(1, text.length) === '')
                  setData({ ...data, amount: 0 });
                else if (
                  parseInt(text.substring(1, text.length), 10) <=
                  accountStore.balance.amount
                )
                  setData({
                    ...data,
                    amount: parseInt(text.substring(1, text.length), 10),
                  });
              }}
              keyboardType="number-pad"
              style={ButtonPrimaryStyle.amountInput}
            />
          </View>

          <TextInput
            placeholder="Queres dejar un comentario?..."
            placeholderTextColor="grey"
            value={data.comment}
            onChangeText={(text: string) => setData({ ...data, comment: text })}
            style={ButtonPrimaryStyle.input}
          />
        </View>
        <View>
          {data.amount > 0 &&
          data.email.length > 0 &&
          data.email !== userStore.email &&
          data.comment.length < 50 ? (
            <View style={{ alignSelf: 'center', marginTop: '20%' }}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    addFunds(
                      userStore.email.toLowerCase(),
                      data.email.toLowerCase(),
                      'Transfer',
                      data.amount,
                      data.comment,
                      token,
                    ),
                  );
                  setData({
                    ...data,
                    amount: 0,
                  });
                }}
              >
                <LinearGradient
                  style={ButtonPrimaryStyle.gradientButton}
                  colors={[colors.primary, colors.secondary]}
                >
                  <Text style={ButtonPrimaryStyle.whiteText}>ENVIAR</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ alignSelf: 'center', marginTop: '20%' }}>
              <TouchableOpacity disabled>
                <LinearGradient
                  style={ButtonPrimaryStyle.gradientButtonDisabled}
                  colors={[colors.disabledPrimary, colors.disabledSecondary]}
                >
                  <Text style={ButtonPrimaryStyle.whiteText}>ENVIAR</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View style={StylesCon.filler} />
    </View>
  );
};
