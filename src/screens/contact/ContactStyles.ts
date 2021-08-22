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
    zIndex: 70,
    flex: 1,
    // marginTop: 15,
    marginBottom: 40,
    borderRadius: 10,
    alignSelf: 'center',
    textAlign: 'center',
    width: '80%',
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
  header: {
    height: 70,
    width: '100%',
    marginTop: '-3%',
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
    height: 40,
    width: 70,
    left: 0,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000',
  },

  headerOne: { backgroundColor: '#000', marginTop: '-10%' },

  // icon: { marginTop: '-30%' },

  viewbtn: {
    zIndex: 80,
    position: 'fixed',
    // top: 0,
    // left: 0,
    right: 20,
    bottom: 20,
    borderRadius: 100,
    borderWidth: 1,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
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

  iconAdd: {
    width: '15%',
    // marginTop: '6.5%',
    // marginLeft: '10%',
  },
  textBtn: {
    color: colors.primary,
    fontSize: 20,
    marginTop: '-16.5%',
    marginRight: '-8%',
    fontWeight: '600',
  },

  TextDescription: {
    textAlign: 'justify',
    color: '#767676de',
    fontSize: 25,
    fontWeight: '100',
  },

  ViewDescription: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '50%',
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
