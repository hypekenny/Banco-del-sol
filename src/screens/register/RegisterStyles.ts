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
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 30,
  },
  inputRegister: {
    borderRadius: 50,
    height: 45,
    borderWidth: 2,
    borderColor: '#FF6C5D',
    paddingVertical: 0,
    paddingLeft: 8,
    paddingRight: 8,
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
  registertwo: {
    width: 0,
    height: 0,
  },
  ellipse: {
    position: 'relative',
    zIndex: 20,
    bottom: '-25%',
    marginTop: '-50%',
    left: '20%',
    width: '60%',
    height: '60%',
    borderRadius: 999,
    transform: [{ scaleX: 3 }],
  },
});
