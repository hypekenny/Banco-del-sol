import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    overflow: 'hidden',
    zIndex: 0,
    alignSelf: 'center',
    minHeight: 785,
    maxHeight: 785,
    width: 388,
    marginLeft: -2,
    borderRadius: 30,
  },
  maxBalanceText: {
    alignSelf: 'center',
    color: colors.primary,
    marginBottom: '2%',
    fontSize: 20,
  },
});
