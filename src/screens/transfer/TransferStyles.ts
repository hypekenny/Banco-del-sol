import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
    justifyContent: 'center',
  },
  maxBalanceText: {
    alignSelf: 'center',
    color: colors.primary,
    marginTop: '8%',
    marginBottom: '2%',
    fontSize: 20,
  },
  comment: {
    width: '75%',
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
  ammount: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
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
  amountInput: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    color: '#ffff',
  },
});
