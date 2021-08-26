import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
// import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    flex: 1,
    alignSelf: 'center',
    minHeight: 785,
    maxHeight: 785,
    width: 400,
    borderRadius: 30,
  },
  headerOne: {
    // alignSelf: 'center',
    backgroundColor: '#000',
    height: 63,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // width: '100%',
  },
  header: {
    alignSelf: 'center',
    height: 65,
    width: '97%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },

  phone: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
  Box: {
    zIndex: 70,
    flex: 1,
    marginBottom: 40,
    borderRadius: 10,
    alignSelf: 'center',
    textAlign: 'center',
    width: '50%',
  },

  BTNBox: {
    zIndex: 70,
    flex: 1,
    backgroundColor: '#fff',
    borderColor: `${colors.primary}`,
    borderWidth: 1,
    marginTop: 50,
    borderRadius: 15,
    alignSelf: 'center',
    textAlign: 'center',
    width: '80%',
    height: '30%',

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
  },

  textBoxEmail: { color: '#000', fontSize: 20, fontWeight: '100' },

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

  viewbtn: {
    zIndex: 80,
    // position: 'fixed',
    position: 'absolute',
    // position: 'fixed',
    // top: 0,
    // left: 0,
    right: 10,
    bottom: 10,

    borderRadius: 100,
    borderWidth: 1,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: '15%',
    backgroundColor: '#fff',

    borderColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },

  iconAdd: {
    width: '15%',
  },
  textBtn: {
    color: colors.primary,
    fontSize: 20,
    marginTop: '-16.5%',
    marginRight: '-8%',
    fontWeight: '600',
  },

  TextDescription: {
    // textAlign: 'justify',
    textAlign: 'center',
    color: '#767676de',
    fontSize: 25,
    fontWeight: '100',
    // justifyContent: 'center',
    marginTop: '-130%',
  },

  ViewDescription: {
    width: '90%',
    alignSelf: 'center',
    // justifyContent: 'center',
    // marginTop: '-50%',
  },

  BTNRemove: {
    // backgroundColor: '#000',
    width: '10%',
    marginLeft: 15,
    marginTop: 15,
    alignItems: 'flex-start',
  },
  textInput: {
    height: 40,
    width: '75%',
    marginLeft: 55,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    marginTop: -30,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginTop: 15,
    width: 50,
    marginLeft: 15,
    // alignSelf: 'center',
    // backgroundColor: '#000',
  },
});
