import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    overflow: 'hidden',
    zIndex: 0,
    alignSelf: 'center',
    minHeight: 750,
    width: 411,
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 6,
  },
  maxBalanceText: {
    alignSelf: 'center',
    color: colors.primary,
    marginBottom: '2%',
    fontSize: 20,
  },
});
