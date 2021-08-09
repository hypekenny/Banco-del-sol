import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 150,
    backgroundColor: 'white',
  },
  view: {
    backgroundColor: colors.white,
    width: 250,
    height: 180,
    borderRadius: 22,
    borderColor: '#FF6C5D',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  bottonRecargar: {
    width: 120,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ff4b6e',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },
  bottonTextR: {
    marginLeft: 45,
    marginBottom: 40,
    color: '#ff9349',
  },
  bottonEnviar: {
    width: 120,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ff4b6e',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },
  bottonTextE: {
    marginBottom: 40,
    marginLeft: 55,
    color: '#ff9349',
  },
  textGeneral: {
    fontSize: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginTop: 15,
  },
  styleIcon: {
    marginTop: 40,
    marginLeft: 10,
    color: '#ff4b6e',
  },
  styleIcon1: {
    marginTop: 40,
    marginLeft: 15,
    color: '#ff4b6e',
  },
  container2: {
    marginLeft: 70,
    width: 250,
    height: 180,
    marginTop: 55,
    marginBottom: 50,
    padding: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },
  footer: {
    backgroundColor: '#000',
  },
});
