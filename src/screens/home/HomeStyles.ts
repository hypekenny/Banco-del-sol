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
    width: 100,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF6C5D',
  },
  bottonTextR: {
    marginLeft: 23,
    marginTop: 5,
    color: '#FF6C5D',
  },
  bottonEnviar: {
    width: 100,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FF6C5D',
  },
  bottonTextE: {
    marginTop: 5,
    marginLeft: 27,
    color: '#FF6C5D',
  },
  textGeneral: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginTop: 15,
  },
});
