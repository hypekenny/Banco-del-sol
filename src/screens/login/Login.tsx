import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {
  cleanErrors,
  login,
  setLoadingFalse,
  setLoadingTrue,
} from '../../redux/actions';
import { styles } from './LoginStyles';
import { Props, resFromBack, RootState } from '../../types/Types';
import { ButtonPrimaryStyle } from '../../constants/ButtonPrymaryStyle';
import colors from '../../constants/colors';
import { LoadingFull } from '../loading2/LoadingFull';
import { StylesCon } from '../../constants/Styles';
import Nicolas from '../../../assets/ProfilesPics/Nicolas.jpg';
import Sebastian from '../../../assets/ProfilesPics/Sebastian.png';

export const Login = ({ navigation }: Props) => {
  const userStore = useSelector((state: resFromBack) => state.user);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.errors);
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    amount: 0,
  });
  useEffect(() => {
    if (error.length) {
      setState(true);
    }
  }, [error.length]);
  if (error.length) {
    dispatch(setLoadingFalse());
  }

  // ABOUT

  function linkMarcos() {
    window.open('https://www.linkedin.com/in/marcos-albarado-7b337820b/');
  }

  function linkMarcosGit() {
    window.open('https://github.com/GRIYO35');
  }

  function linkNico() {
    window.open('https://www.linkedin.com/in/nicolas-cardone/');
  }

  function linkNicoGit() {
    window.open('https://github.com/enodrac');
  }

  function linkEze() {
    window.open('https://www.linkedin.com/in/ezequieldecunto/');
  }

  function linkEzeGit() {
    window.open('https://github.com/Pinidecu');
  }

  function linkSan() {
    window.open('https://www.linkedin.com/in/santiago-ferro-fullstack/');
  }

  function linkSanGit() {
    window.open('https://github.com/hypekenny');
  }

  function linkRodri() {
    window.open('https://www.linkedin.com/in/rodrigolopezsmz/');
  }

  function linkRodriGit() {
    window.open('https://github.com/rodrigolopsmz');
  }

  function linkKevin() {
    window.open('https://www.linkedin.com/in/kevin-arian/');
  }

  function linkKevinGit() {
    window.open('https://github.com/Vashomaru');
  }

  function linkSeba() {
    window.open('https://www.linkedin.com/in/sebastiantorres-fullstack-react/');
  }

  function linkSebaGit() {
    window.open('https://github.com/SebastianTorres00');
  }

  function linkVeiga() {
    window.open('https://www.linkedin.com/in/santiagoveiga46/');
  }

  function linkVeigaGit() {
    window.open('https://github.com/sajave');
  }

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

      <View style={styles.about}>
        {/* <Text style={styles.textAbout}>¿Quien trabajo aca?</Text> */}
        <View
          style={{
            // backgroundColor: 'blue',
            height: '100%',
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            // marginTop: '5%',
            flexWrap: 'wrap',
          }}
        >
          {/* Espacio */}
          <View style={styles.imgBoxTwo}>
            <View style={styles.imgBx}>
              <img
                style={{
                  width: 85,
                  borderRadius: '50%',
                  alignSelf: 'center',
                  marginTop: '10%',
                }}
                src={Sebastian}
                alt=""
              />

              <Text
                style={{
                  marginTop: '8%',
                  marginBottom: '13%',

                  fontSize: 25,
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                Sebastian Torres
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: '-13%',

                  marginBottom: '5%',
                }}
              >
                <TouchableOpacity
                  onPress={linkSeba}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '2%',
                  }}
                >
                  {/* <AiFillLinkedin className={styles.iconLinkedin} /> */}
                  <AntDesign
                    name="linkedin-square"
                    size={24}
                    color="#0a66c2"
                    style={styles.iconLinkedin}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={linkSebaGit}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign
                    name="github"
                    size={28}
                    color="#22272e"
                    style={styles.iconGit}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.imgBoxTwo}>
            <View style={styles.imgBx}>
              <img
                style={{
                  width: 85,
                  borderRadius: '50%',
                  alignSelf: 'center',
                  marginTop: '10%',
                }}
                src={Sebastian}
                alt=""
              />

              <Text
                style={{
                  marginTop: '8%',
                  marginBottom: '13%',

                  fontSize: 25,
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                Sebastian Torres
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: '-13%',

                  marginBottom: '5%',
                }}
              >
                <TouchableOpacity
                  onPress={linkSeba}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '2%',
                  }}
                >
                  {/* <AiFillLinkedin className={styles.iconLinkedin} /> */}
                  <AntDesign
                    name="linkedin-square"
                    size={24}
                    color="#0a66c2"
                    style={styles.iconLinkedin}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={linkSebaGit}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign
                    name="github"
                    size={28}
                    color="#22272e"
                    style={styles.iconGit}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.imgBoxTwo}>
            <View style={styles.imgBx}>
              <img
                style={{
                  width: 85,
                  borderRadius: '50%',
                  alignSelf: 'center',
                  marginTop: '10%',
                }}
                src={Sebastian}
                alt=""
              />

              <Text
                style={{
                  marginTop: '8%',
                  marginBottom: '13%',

                  fontSize: 25,
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                Sebastian Torres
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: '-13%',

                  marginBottom: '5%',
                }}
              >
                <TouchableOpacity
                  onPress={linkSeba}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '2%',
                  }}
                >
                  {/* <AiFillLinkedin className={styles.iconLinkedin} /> */}
                  <AntDesign
                    name="linkedin-square"
                    size={24}
                    color="#0a66c2"
                    style={styles.iconLinkedin}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={linkSebaGit}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign
                    name="github"
                    size={28}
                    color="#22272e"
                    style={styles.iconGit}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.imgBoxTwo}>
            <View style={styles.imgBx}>
              <img
                style={{
                  width: 85,
                  borderRadius: '50%',
                  alignSelf: 'center',
                  marginTop: '10%',
                }}
                src={Sebastian}
                alt=""
              />

              <Text
                style={{
                  marginTop: '8%',
                  marginBottom: '13%',

                  fontSize: 25,
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                Sebastian Torres
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: '-13%',

                  marginBottom: '5%',
                }}
              >
                <TouchableOpacity
                  onPress={linkSeba}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '2%',
                  }}
                >
                  {/* <AiFillLinkedin className={styles.iconLinkedin} /> */}
                  <AntDesign
                    name="linkedin-square"
                    size={24}
                    color="#0a66c2"
                    style={styles.iconLinkedin}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={linkSebaGit}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign
                    name="github"
                    size={28}
                    color="#22272e"
                    style={styles.iconGit}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Espacio */}
        </View>
        {/* Espacio */}
      </View>

      <img
        style={{
          width: 411,
          height: 813,
          position: 'absolute',
          alignSelf: 'center',
          marginLeft: '1%',
          marginRight: '1%',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880174589605478400/Mockup_-_android_-_BDS_app.png"
        alt=""
      />
      <View style={StylesCon.filler} />
      <View style={styles.container}>
        <View style={StylesCon.headerOne}>
          <LinearGradient
            style={StylesCon.header}
            colors={[colors.primary, colors.secondary]}
          />
          <View style={StylesCon.title}>
            <Text style={styles.textTitle}>Ingresar</Text>
          </View>
          <TouchableOpacity
            style={StylesCon.back}
            onPress={() => {
              navigation.popToTop();
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
        <LoadingFull show={loading} />
        <View
          style={{
            alignSelf: 'center',
            zIndex: 100,
            position: 'absolute',
            width: '100%',
          }}
        >
          <AwesomeAlert
            show={state}
            showProgress={false}
            title={error}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton
            confirmText="Aceptar"
            confirmButtonColor="#ff4b6e"
            onConfirmPressed={() => {
              setState(false);
              dispatch(cleanErrors());
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email...."
            placeholderTextColor="grey"
            value={user.email}
            onChangeText={(text: string) => setUser({ ...user, email: text })}
            keyboardType="email-address"
            style={ButtonPrimaryStyle.input}
          />

          <TextInput
            placeholder="Contraseña..."
            placeholderTextColor="grey"
            value={user.password}
            onChangeText={(text: string) =>
              setUser({ ...user, password: text })
            }
            secureTextEntry
            style={ButtonPrimaryStyle.input}
          />
          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.push('ForgotPassword')}
          >
            <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btns}>
          {user.password.length > 6 && user.email.length > 4 ? (
            <TouchableOpacity
              onPress={() => {
                dispatch(login(user.email, user.password));
                dispatch(setLoadingTrue());
              }}
              style={styles.button}
            >
              <Text style={styles.text}>INGRESAR</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                console.log();
              }}
              disabled
              style={styles.buttondisabled}
            >
              <Text style={styles.textlogin}>INGRESAR</Text>
            </TouchableOpacity>
          )}
        </View>
        <LinearGradient
          style={styles.ellipse}
          colors={[colors.primary, colors.secondary]}
          end={[1, 1]}
        />
        {userStore.email &&
        userStore.email.length &&
        userStore.condition === 'active'
          ? navigation.push('HomeTab')
          : null}
      </View>
      <View style={StylesCon.filler} />
      <View style={styles.aboutTwo}>
        {/* <Text style={styles.textAbout}>¿Quien trabajo aca?</Text> */}
        <View
          style={{
            // backgroundColor: 'blue',
            height: '100%',
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            // marginTop: '5%',
            flexWrap: 'wrap',
          }}
        >
          {/* Espacio */}
          <View style={styles.imgBoxTwo}>
            <View style={styles.imgBx}>
              <img
                style={{
                  width: 85,
                  borderRadius: '50%',
                  alignSelf: 'center',
                  marginTop: '15%',

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                src={Sebastian}
                alt=""
              />

              <Text
                style={{
                  marginTop: '15%',
                  fontSize: 25,
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                Sebastian Torres
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: '-13%',
                }}
              >
                <TouchableOpacity
                  onPress={linkSeba}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '2%',
                  }}
                >
                  {/* <AiFillLinkedin className={styles.iconLinkedin} /> */}
                  <AntDesign
                    name="linkedin-square"
                    size={24}
                    color="#0a66c2"
                    style={styles.iconLinkedin}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={linkSebaGit}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign
                    name="github"
                    size={28}
                    color="#22272e"
                    style={styles.iconGit}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.imgBoxTwo}>
            <View style={styles.imgBx}>
              <img
                style={{
                  width: '30%',
                  borderRadius: '50%',
                  alignSelf: 'center',
                  marginTop: '15%',

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                src={Sebastian}
                alt=""
              />

              <Text
                style={{
                  marginTop: '15%',
                  fontSize: 25,
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                Sebastian Torres
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: '-13%',
                }}
              >
                <TouchableOpacity
                  onPress={linkSeba}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '2%',
                  }}
                >
                  {/* <AiFillLinkedin className={styles.iconLinkedin} /> */}
                  <AntDesign
                    name="linkedin-square"
                    size={24}
                    color="#0a66c2"
                    style={styles.iconLinkedin}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={linkSebaGit}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign
                    name="github"
                    size={28}
                    color="#22272e"
                    style={styles.iconGit}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.imgBoxTwo}>
            <View style={styles.imgBx}>
              <img
                style={{
                  width: '30%',
                  borderRadius: '50%',
                  alignSelf: 'center',
                  marginTop: '15%',

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                src={Sebastian}
                alt=""
              />

              <Text
                style={{
                  marginTop: '15%',
                  fontSize: 25,
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                Sebastian Torres
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: '-13%',
                }}
              >
                <TouchableOpacity
                  onPress={linkSeba}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '2%',
                  }}
                >
                  {/* <AiFillLinkedin className={styles.iconLinkedin} /> */}
                  <AntDesign
                    name="linkedin-square"
                    size={24}
                    color="#0a66c2"
                    style={styles.iconLinkedin}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={linkSebaGit}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign
                    name="github"
                    size={28}
                    color="#22272e"
                    style={styles.iconGit}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.imgBoxTwo}>
            <View style={styles.imgBx}>
              <img
                style={{
                  width: '30%',
                  borderRadius: '50%',
                  alignSelf: 'center',
                  marginTop: '15%',

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                src={Nicolas}
                alt=""
              />

              <Text
                style={{
                  marginTop: '15%',
                  fontSize: 25,
                  fontWeight: '500',
                  textAlign: 'center',
                }}
              >
                Nicolas Cardone
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  bottom: '-13%',
                }}
              >
                <TouchableOpacity
                  onPress={linkSeba}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '2%',
                  }}
                >
                  {/* <AiFillLinkedin className={styles.iconLinkedin} /> */}
                  <AntDesign
                    name="linkedin-square"
                    size={24}
                    color="#0a66c2"
                    style={styles.iconLinkedin}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={linkSebaGit}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 100,
                    width: 50,
                    height: 45,
                    // backgroundColor: 'yellow',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign
                    name="github"
                    size={28}
                    color="#22272e"
                    style={styles.iconGit}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Espacio */}
        </View>
        {/* Espacio */}
      </View>
    </View>
  );
};
