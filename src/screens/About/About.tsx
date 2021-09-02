import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './AboutStyles';
// import { AntDesign } from '@expo/vector-icons';
import Sebastian from '../../../assets/ProfilesPics/Sebastian.png';
import Nicolas from '../../../assets/ProfilesPics/Nicolas.jpg';
import Ezequiel from '../../../assets/ProfilesPics/Ezequiel.jpg';
import SantiagoF from '../../../assets/ProfilesPics/SantiagoF.jpg';
import SantiagoV from '../../../assets/ProfilesPics/SantiagoV.jpg';
import Marcos from '../../../assets/ProfilesPics/Marcos.jpg';
import Rodrigo from '../../../assets/ProfilesPics/Rodrigo.jpg';
import Kevin from '../../../assets/ProfilesPics/Kevin.jpg';

import { Props } from '../../types/Types';

export const AboutUs = ({ navigation }: Props) => {
  function linkSeba() {
    window.open('https://www.linkedin.com/in/sebastiantorres-fullstack-react/');
  }

  function linkSebaGit() {
    window.open('https://github.com/SebastianTorres00');
  }

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

  function linkVeiga() {
    window.open('https://www.linkedin.com/in/santiagoveiga46/');
  }

  function linkVeigaGit() {
    window.open('https://github.com/sajave');
  }
  return (
    <View style={styles.container}>
      <img
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        src="https://cdn.discordapp.com/attachments/872492726397042688/880917630180028436/Banco-del-Sol-Background_Web.png"
        alt=""
      />
      <View
        style={{
          width: '100%',
          top: 0,
          position: 'absolute',
        }}
      >
        <TouchableOpacity
          style={styles.btnAbout}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnText}>Volver</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '500',
            marginTop: '1%',

            color: '#fff',
            textAlign: 'center',
          }}
        >
          ¿Quienes Somos?
        </Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          position: 'absolute',
          width: '80%',
          height: '80%',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {/* aaaa    */}
        <View style={styles.imgBoxTwo}>
          <View style={styles.imgBx}>
            <img
              style={{
                width: '40%',
                borderRadius: '50%',
                alignSelf: 'center',
                marginTop: '5%',
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
        {/* aaa */}
        <View style={styles.imgBoxTwo}>
          <View style={styles.imgBx}>
            <img
              style={{
                width: '40%',
                borderRadius: '50%',
                alignSelf: 'center',
                marginTop: '5%',
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
                onPress={linkNico}
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
                onPress={linkNicoGit}
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
        {/* aaaa */}
        <View style={styles.imgBoxTwo}>
          <View style={styles.imgBx}>
            <img
              style={{
                width: '40%',
                borderRadius: '50%',
                alignSelf: 'center',
                marginTop: '5%',
              }}
              src={SantiagoF}
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
              Santiago Ferro
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                bottom: '-13%',
              }}
            >
              <TouchableOpacity
                onPress={linkSan}
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
                onPress={linkSanGit}
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
        {/* aaa */}
        <View style={styles.imgBoxTwo}>
          <View style={styles.imgBx}>
            <img
              style={{
                width: '40%',
                borderRadius: '50%',
                alignSelf: 'center',
                marginTop: '5%',
              }}
              src={SantiagoV}
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
              Santiago Veiga
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                bottom: '-13%',
              }}
            >
              <TouchableOpacity
                onPress={linkVeiga}
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
                onPress={linkVeigaGit}
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
        {/* aaa */}
        <View style={styles.imgBoxTwo}>
          <View style={styles.imgBx}>
            <img
              style={{
                width: '40%',
                borderRadius: '50%',
                alignSelf: 'center',
                marginTop: '5%',
              }}
              src={Marcos}
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
              Marcos
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                bottom: '-13%',
              }}
            >
              <TouchableOpacity
                onPress={linkMarcos}
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
                onPress={linkMarcosGit}
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
        {/* aa */}
        <View style={styles.imgBoxTwo}>
          <View style={styles.imgBx}>
            <img
              style={{
                width: '40%',
                borderRadius: '50%',
                alignSelf: 'center',
                marginTop: '5%',
              }}
              src={Ezequiel}
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
              Ezequiel
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                bottom: '-13%',
              }}
            >
              <TouchableOpacity
                onPress={linkEze}
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
                onPress={linkEzeGit}
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
        {/* aaa */}
        <View style={styles.imgBoxTwo}>
          <View style={styles.imgBx}>
            <img
              style={{
                width: '40%',
                borderRadius: '50%',
                alignSelf: 'center',
                marginTop: '5%',
              }}
              src={Rodrigo}
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
              Rodrigo
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                bottom: '-13%',
              }}
            >
              <TouchableOpacity
                onPress={linkRodri}
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
                onPress={linkRodriGit}
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
        {/* aaa */}
        <View style={styles.imgBoxTwo}>
          <View style={styles.imgBx}>
            <img
              style={{
                width: '40%',
                borderRadius: '50%',
                alignSelf: 'center',
                marginTop: '5%',
              }}
              src={Kevin}
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
              Kevin Ordoñez
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                bottom: '-13%',
              }}
            >
              <TouchableOpacity
                onPress={linkKevin}
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
                onPress={linkKevinGit}
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
        {/* aaaa */}
      </View>
    </View>
  );
};
