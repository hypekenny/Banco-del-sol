import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const ButtonSecondaryStyle = StyleSheet.create({
  button: {
    width: 250,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: colors.primary,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },
  buttonDisable: {
    width: 250,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'grey',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },
  text: {
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});
