import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    overflow: 'hidden',
    zIndex: 0,
    alignSelf: 'center',
    minHeight: 785,
    maxHeight: 785,
    width: 388,
    marginLeft: -2,
    borderRadius: 30,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  link: {
    marginTop: 10,
    marginBottom: 10,
    color: 'orange',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    fontWeight: 'bold',
  },
  ellipse: {
    position: 'relative',
    zIndex: 20,
    bottom: '-25%',
    marginTop: '-50%',
    left: '20%',
    width: '60%',
    height: '60%',
    borderRadius: 999,
    transform: [{ scaleX: 3 }],
  },
  button: {
    zIndex: 80,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
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

    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttondisabled: {
    zIndex: 80,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#deac98de',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,

    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textlogin: {
    color: '#9a788ccf',
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  btns: {
    width: 300,
    height: 100,
    zIndex: 30,
    marginBottom: -150,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    height: 75,
    width: '100%',
  },

  title: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 70,
    top: 0,
    marginTop: '-0.3%',
    width: '30%',
  },

  textTitle: {
    position: 'absolute',
    left: 5,
    top: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    width: '180%',
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

  headerOne: { backgroundColor: '#000', height: 63 },

  icon: { marginTop: '-18%' },

  // ABOUT
  // 628 / 510
  about: {
    zIndex: 10,
    // backgroundColor: 'red',
    width: '33%',
    // height: '65%',
    maxHeight: 738,
    minHeight: 738,
    position: 'absolute',
    marginLeft: '4%',
    justifyContent: 'center',

    marginTop: '-10%',
  },
  aboutTwo: {
    width: '33%',
    // height: '65%',
    maxHeight: 828,
    // minHeight: 828,
    position: 'absolute',
    // marginLeft: '-4%',
    marginRight: '4%',
    justifyContent: 'center',

    marginTop: '-10%',
    right: 0,
    // backgroundColor: 'red',
  },
  iconLinkedin: {
    borderRadius: 50,
  },

  iconGit: {
    borderRadius: 50,
  },

  imgBx: {
    width: '100%',
    height: '100%',

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

    transform: [{ rotate: '3deg' }],

    marginTop: '5%',
  },

  imgBoxTwo: {
    // width: 289,
    // height: 315,

    width: '48%',
    height: '65%',

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

    transform: [{ rotate: '-3deg' }],

    marginTop: '7%',
  },

  textAbout: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },

  imgProfile: {
    width: '30%',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: '15%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
});
