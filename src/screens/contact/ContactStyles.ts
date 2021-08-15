import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
// import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  Box: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 50,
  },
  textBox: {
    color: '#fff',
  },
  header: {
    height: 70,
    width: '100%',
    marginTop: '-4%',
  },
  title: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 70,
    top: 0,
    marginTop: '-1%',
    width: '30%',
    // backgroundColor: 'red',
  },
  textTitle: {
    position: 'absolute',
    left: 5,
    top: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    width: '180%',
    // backgroundColor: 'blue',
  },
  back: {
    position: 'absolute',
    height: 70,
    width: 70,
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerOne: { backgroundColor: '#000', marginTop: '-10%' },
  icon: { marginTop: '-30%' },

  button: {
    borderRadius: 15,
    borderWidth: 1,
    width: '40%',
    height: '7%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '15%',

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
  },
  textBtn: {
    color: colors.primary,
    fontSize: 20,
    marginTop: '5%',
    fontWeight: 'bold',
  },
});
