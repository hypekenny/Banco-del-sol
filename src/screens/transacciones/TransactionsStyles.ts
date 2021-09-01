import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
  },
  parentHr: {
    height: 2,
    color: '#5E5E5E',
    width: '100%',
  },
  child: {
    backgroundColor: '#ffffff',
    padding: 16,
  },
  text: {
    fontSize: 17,
    fontWeight: '100',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  textb: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  text2: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  container: {
    backgroundColor: '#fff',
    width: 411,
    height: 900,
    alignSelf: 'center',
  },
  textGeneral: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 2,
  },
  box: {
    borderWidth: 1,
    height: 'auto',
    width: '90%',
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
  textCard: {
    fontSize: 20,
    marginTop: 19,
    fontWeight: '100',
  },
  textCardG: {
    fontSize: 20,
    marginTop: 19,
    fontWeight: '100',
    color: 'green',
  },
  textCardR: {
    fontSize: 20,
    marginTop: 19,
    fontWeight: '100',
    color: 'red',
  },
  textCardBold: {
    fontSize: 20,
    marginTop: 19,
    fontWeight: 'bold',
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
  buttonGroupBox: {
    margin: 20,
    borderWidth: 1,
    height: 40,
    width: 'auto',
    marginHorizontal: 10,
    borderRadius: 18,
    borderColor: colors.primary,
    // marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 18,

    elevation: 10,
  },
  buttonGroupBoxSelected: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    borderColor: colors.primary,
  },
});
