import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './AboutStyles';
// import { AntDesign } from '@expo/vector-icons';
import Sebastian from '../../../assets/ProfilesPics/Sebastian.png';
import { Props } from '../../types/Types';

export const AboutUs = ({ navigation }: Props) => {
  function linkSeba() {
    window.open('https://www.linkedin.com/in/sebastiantorres-fullstack-react/');
  }

  function linkSebaGit() {
    window.open('https://github.com/SebastianTorres00');
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
          flexDirection: 'row-reverse',
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
        {/* aaaa */}
      </View>
    </View>
  );
};
