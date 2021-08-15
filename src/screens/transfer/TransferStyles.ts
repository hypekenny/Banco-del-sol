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
    marginBottom: '2%',
    fontSize: 20,
  },
});
