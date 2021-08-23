import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
  },
  parentHr: {
    height: 2,
    color: '#5E5E5E',
    width: '100%',
  },
  child: {
    backgroundColor: '#ffffff',
    padding: 16,
  },
  text: {
    fontSize: 17,
    fontWeight: '100',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  textb: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text2: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  textGeneral: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 2,
  },
});
