import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  view: {
    backgroundColor: '#92929266',
    width: 250,
    height: 200,
    borderRadius: 22,
  },
  bottonRecargar: {
    width: 100,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  bottonTextR: {
    marginLeft: 23,
    marginTop: 5,
  },
  bottonEnviar: {
    width: 100,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  bottonTextE: {
    marginTop: 5,
    marginLeft: 27,
  },
});
