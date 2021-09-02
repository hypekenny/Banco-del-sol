import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  imgBoxTwo: {
    width: 289,
    height: 315,

    // width: '48%',
    // height: '65%',

    backgroundColor: '#fff',
    marginRight: '4%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    transform: [{ rotate: '-3deg' }],

    marginTop: 30,

    // position: 'absolute',
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    // overflow: 'hidden',
  },
  imgBx: {
    width: '100%',
    height: '100%',

    backgroundColor: '#fff',
    // marginRight: '4%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,

    transform: [{ rotate: '3deg' }],

    marginTop: '5%',
  },

  iconLinkedin: {
    borderRadius: 50,
  },

  iconGit: {
    borderRadius: 50,
  },

  btnAbout: {
    position: 'absolute',
    width: 250,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: '3%',
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
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
  btnText: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
});
