import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    height: 42,
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
    height: '100%',
  },
  filtersOrder: {
    marginTop: 10,
  },
  textGeneral: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  box: {
    borderWidth: 2,
    height: 'auto',
    width: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    borderColor: colors.primary,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 5,
  },
  textCard: {
    fontSize: 18,
    marginTop: 12,
    fontWeight: '400',
  },
  textCardG: {
    fontSize: 18,
    marginTop: 12,
    fontWeight: '400',
    color: 'green',
  },
  textCardR: {
    fontSize: 18,
    marginTop: 12,
    fontWeight: '400',
    color: 'red',
  },
  textCardBold: {
    fontSize: 18,
    marginTop: 12,
    fontWeight: 'bold',
  },
  buttonGroupBox: {
    // marginBottom: 20,
    // marginLeft: 5,
    // marginRight: 5,
    borderWidth: 2,
    height: 40,
    width: 50,
    marginHorizontal: 5,
    borderRadius: 25,
    borderColor: colors.primary,
    marginBottom: 15,
    /*     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 5, */
  },
  buttonGroupBoxSelected: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    borderColor: colors.primary,
  },
});
