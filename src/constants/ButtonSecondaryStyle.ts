import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const ButtonSecondaryStyle = StyleSheet.create({
  button: {
    // width: '90%',
    zIndex: 80,
    width: 200,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#fff',
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
  },

  buttondisabled: {
    zIndex: 80,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#deac98de',
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
  },

  text: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    marginTop: '-3%',
  },
});
