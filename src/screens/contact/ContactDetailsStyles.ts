import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
// import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  phone: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  headerOne: {
    // alignSelf: 'center',
    backgroundColor: '#000',
    height: 63,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // width: '100%',
    marginTop: '25%',
  },
  header: {
    alignSelf: 'center',
    height: 65,
    width: '97%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
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

  container: {
    flex: 1,

    alignSelf: 'center',
    // minHeight: 750,
    minHeight: 785,
    maxHeight: 785,
    width: 400,

    borderRadius: 30,
    // zIndex: 20,
    marginBottom: 200,
    overflow: 'hidden',
  },
  box: {
    // position: 'absolute',

    backgroundColor: '#fff',
    borderRadius: 23,
    borderColor: `${colors.primary}`,
    borderWidth: 1,
    textAlign: 'center',
    alignSelf: 'center',
    height: '20%',
    width: '80%',
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

  textBoxName: {
    color: '#000',
    fontSize: 25,
    fontWeight: '600',
    marginTop: '5%',
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
    height: '50%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
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

  iconArrow: {
    marginLeft: '-10%',
    marginTop: '-3%',
    position: 'absolute',
  },

  icon: {
    marginLeft: '-70%',
    marginTop: '-3%',
    position: 'absolute',
  },
});
