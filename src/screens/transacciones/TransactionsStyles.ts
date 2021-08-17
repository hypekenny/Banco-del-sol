import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  //  #FF6F91
  // DOU #FA8072
  // #FF8882
  // F39189

  // ch

  // 949CDF
  // A685E2
  // 6155A6

  container: {
    // backgroundColor: '#FA8072',
    backgroundColor: '#fff',
    height: '100%',
  },
  img: {
    borderRadius: 10,
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 10,
  },

  // bfbfbf
  box: {
    marginTop: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.primary,
    height: 134,
    width: 275,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 15,
  },

  boxin: {
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#ff4b6e',
    height: 130,
    width: 270,
    // marginTop: 1,
    marginRight: 1,
    // marginLeft: 1,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },

  boxdetailsin: {
    // backgroundColor: 'red',
    width: 150,
    height: 70,
    alignSelf: 'flex-end',
    marginTop: -50,
  },

  boxdetails: {
    width: 110,
    height: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 35,
  },

  // Texts
  textgast: { fontSize: 16, fontWeight: 'normal' },
  boxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  texttype: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  textheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
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
});
