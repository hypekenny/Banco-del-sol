import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 5,
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
    marginBottom: 10,
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
    borderRadius: 50,
  },
  img: {
    borderRadius: 50,
    width: 80,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerButton: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
});
