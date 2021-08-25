import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const InputStyle = StyleSheet.create({
  inputLeft: {
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
  inputCenter: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    width: '80%',
    alignSelf: 'center',
    padding: 20,
    color: '#212020',
    marginTop: '10%',
  },
});
