import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
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
  link: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: 'blue',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
