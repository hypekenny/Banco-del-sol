import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 120,
    backgroundColor: 'white',
    marginTop: 10,
  },
  view: {
    backgroundColor: colors.white,
    width: 250,
    height: 180,
    borderRadius: 22,
    borderColor: '#FF6C5D',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
  },
  bottonRecargar: {
    width: 120,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ff4b6e',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },
  bottonTextR: {
    marginLeft: 45,
    marginBottom: 40,
    marginTop: 35,
    color: '#ff9349',
  },
  bottonEnviar: {
    width: 120,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ff4b6e',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },
  bottonTextE: {
    marginBottom: 40,
    marginLeft: 55,
    color: '#ff9349',
    marginTop: 35,
  },
  textGeneral: {
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    marginTop: 19,
    fontWeight: '100',
  },
  textNum: {
    fontSize: 20,
    marginTop: 19,
    fontWeight: 'bold',
  },
  styleIcon: {
    marginTop: 14,
    marginLeft: 10,
    position: 'absolute',
    color: '#ff4b6e',
  },
  styleIcon1: {
    // marginTop: 40,
    marginLeft: 10,
    position: 'absolute',
    color: '#ff4b6e',
  },
  styleIcon2: {
    // marginTop: 40,
    marginLeft: 10,
    color: 'white',
  },
  container2: {
    marginLeft: 70,
    width: 250,
    height: 180,
    marginTop: 55,
    marginBottom: 50,
    padding: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.white,
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
  footer: {
    backgroundColor: '#000',
  },
  box: {
    borderWidth: 1,
    height: 190,
    width: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 18,
    borderColor: colors.primary,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 13.16,
    elevation: 14,
  },
  boxt: {
    height: '105%',
    width: '104%',
    borderRadius: 18,
  },

  header: {
    height: 75,
    width: 411,
    marginTop: '-3%',
  },
  title: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 70,
    top: 0,
    width: '30%',
  },
  textTitle: {
    position: 'absolute',
    left: 5,
    justifyContent: 'center',
    fontSize: 18,
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
  icon: { justifyContent: 'center' },
  burgerText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 10,
  },
  burgerTextLogout: {
    color: '#F53D3D',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 10,
  },
});
