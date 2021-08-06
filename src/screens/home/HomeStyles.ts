import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  inputEmail: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,

    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 10,
  },
  inputPassword: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,

    paddingLeft: 8,
    paddingRight: 8,
    marginTop: -40,
  },
  inputRegister: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,

    paddingLeft: 8,
    paddingRight: 8,
    // marginTop: -40,
  },
  btn: {
    backgroundColor: 'blue',
  },
  img: {
    borderRadius: 50,
    width: 80,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  view: {
    backgroundColor: '#92929266',
    width: 250,
    height: 200,
    borderRadius: 22,
  },
  bottonRecargar: {
    width: 100,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  bottonTextR: {
    marginLeft: 23,
    marginTop: 5,
  },
  bottonEnviar: {
    width: 100,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  bottonTextE: {
    marginTop: 5,
    marginLeft: 27,
  },
});
