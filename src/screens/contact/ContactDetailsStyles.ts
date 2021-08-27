import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
// import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    /* marginTop: 50, */
    alignSelf: 'center',
    /* height: '15%', */
  },
  box: {
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#fff',
    borderColor: `${colors.primary}`,
    borderWidth: 2,
    textAlign: 'center',
    alignSelf: 'center',
    height: '34%',
    width: '85%',
    marginTop: '50%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
  headerOne: { backgroundColor: '#000', marginTop: '2.1%' },
  textTitle: {
    position: 'absolute',
    left: 5,
    top: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    width: '180%',
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
  },
  header: {
    height: 68,
    width: '100%',
    marginTop: '-3%',
  },
  textBoxName: {
    color: '#000',
    fontSize: 25,
    fontWeight: '600',
    marginTop: '5%',
  },
  back: {
    position: 'absolute',
    height: 40,
    width: 70,
    left: 0,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000',
  },
  textBoxEmail: {
    color: '#000',
    fontSize: 20,
    fontWeight: '100',
    marginTop: '5%',
  },

  btnTransfer: {
    // backgroundColor: 'blue',
    // width: '70%',
    // height: '25%',
    // alignSelf: 'center',
    // borderRadius: 20,
    // marginTop: '20%',
  },

  gradientButton: {
    width: '70%',
    height: '60%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },

  textTransfer: {
    fontSize: 21,
    color: '#fff',
    fontWeight: '500',
    marginRight: '-20%',
  },

  icon: {
    marginLeft: '-70%',
    marginTop: '-3%',
    position: 'absolute',
  },
});
