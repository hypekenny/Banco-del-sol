import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: colors.white,
    justifyContent: 'center',
    padding: 10,
    overflow: 'hidden',
    zIndex: 0,
  },
   containerButton: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    marginTop: 17,
  },
}