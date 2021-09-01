import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const width = 388;
const height = 811;
export const ButtonPrimaryStyle = StyleSheet.create({
  button: {
    flex: 1,
    height: 0.05 * height,
    alignItems: 'center',
    margin: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
  buttoncolor1: {
    backgroundColor: '#ffffff',
  },
  buttoncolor2: {
    backgroundColor: '#ffffff',
  },

  input: {
    width: '90%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 10,
  },
  text: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});

export const styles = StyleSheet.create({
  containerall: {
    width,
    height,
    backgroundColor: 'white',
    alignSelf: 'center',
    minHeight: 785,
    maxHeight: 785,
    marginLeft: -2,
    borderRadius: 30,
  },
  header: {
    height: 65,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container: {
    width: 0.9 * width,
    height: 0.4 * height,
    transform: [{ translateY: 0.1 * height }],
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
    zIndex: 1,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ejey: {
    width: 20,
    marginRight: 5,
    marginLeft: 0,
  },
  ejeyconbar: {
    height: 0.3 * height,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  bar: {
    width: 0.7 * width + 30,
  },
  ejex: {
    width: 0.7 * width,
    alignSelf: 'center',
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
  text: {
    color: 'black',
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  ejexbtn: {
    marginLeft: 25 + 15,
    width: 0.7 * width,
    flexDirection: 'row',
    flex: 1,
  },
  buttonejex: {
    flex: 1,
    height: 0.04 * height,
    alignItems: 'center',
    margin: 1.5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    padding: 2,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 14,
  },
  textejex: {
    fontSize: 11.5,
    fontWeight: '700',
    alignSelf: 'center',
  },
});
