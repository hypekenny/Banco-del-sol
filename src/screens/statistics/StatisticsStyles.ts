import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const ButtonPrimaryStyle = StyleSheet.create({
  button: {
    
    flex:1,
    height:0.05*height,
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
  buttoncolor1:{
    backgroundColor: '#ffffff',
  },
  buttoncolor2:{
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
    width: width,
    height: height,
    backgroundColor: colors.white,
  },
  container: {
    width: width,
    height: 0.4*height,
    backgroundColor: colors.white,
    transform: [{ translateY: 0.1 * height }],
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
});
