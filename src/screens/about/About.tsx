import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './AboutStyles';

export const About = () => {
  function linkMarcos() {
    window.open('https://www.linkedin.com/in/marcos-albarado-7b337820b/');
  }

  function linkNico() {
    window.open('https://www.linkedin.com/in/nicolas-cardone/');
  }

  function linkEze() {
    window.open('https://www.linkedin.com/in/ezequieldecunto/');
  }

  function linkSan() {
    window.open('https://www.linkedin.com/in/santiago-ferro-fullstack/');
  }

  function linkRodri() {
    window.open('https://www.linkedin.com/in/rodrigolopezsmz/');
  }

  function linkKevin() {
    window.open('https://www.linkedin.com/in/kevin-arian/');
  }

  function linkSeba() {
    window.open('https://www.linkedin.com/in/sebastiantorres-fullstack-react/');
  }

  function linkVeiga() {
    window.open('https://www.linkedin.com/in/santiagoveiga46/');
  }

  return (
    <View style={{ position: 'absolute', paddingLeft: '10%', top: '10%' }}>
      <View>
        <Text style={styles.title}>¿Quiénes somos?</Text>
      </View>
      <View style={{ marginTop: '20%' }}>
        <TouchableOpacity onPress={() => linkMarcos()}>
          <Text style={styles.text}>Marcos Albarado</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => linkNico()}>
          <Text style={styles.text}>Nicolás Cardone</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => linkEze()}>
          <Text style={styles.text}>Ezequiel De Cunto</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => linkSan()}>
          <Text style={styles.text}>Santiago Ferro</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => linkRodri()}>
          <Text style={styles.text}>Rodrigo López</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => linkKevin()}>
          <Text style={styles.text}>Kevin Ordoñez</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => linkSeba()}>
          <Text style={styles.text}>Sebastián Torres</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: '10%' }}>
        <TouchableOpacity onPress={() => linkVeiga()}>
          <Text style={styles.text}>Santiago Veiga</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
