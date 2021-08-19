import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  container1: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  container2: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    padding: 10,
    justifyContent: 'space-around',
  },
  input: {
    width: '90%',
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
    marginTop: 30,
    marginBottom: 10,
  },
  picker: {
    color: 'grey' /* 
    border:'none', */,
    width: '100%',
  },
  btns: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  ImageAndButton: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    borderColor: colors.primary,
    backgroundColor: '#fff',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
    borderRadius: 25,
    borderWidth: 2,
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
  buttonDisable: {
    borderColor: colors.primary,
    backgroundColor: '#deac98de',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
    borderRadius: 25,
    borderWidth: 2,
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
  textButton: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    marginTop: '-3%',
  },
  whiteText: {
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gradientButton: {
    width: 300,
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
  },
  gradientButtonDisabled: {
    width: 300,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'grey',
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
});