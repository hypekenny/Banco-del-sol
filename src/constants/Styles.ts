import { StyleSheet } from 'react-native';
// import background from '../../assets/Banco-del-Sol-Background_Web.png';

import colors from './colors';

export const StylesCon = StyleSheet.create({
  phone: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    // bac
    // background: '../../assets/Banco-del-Sol-Background_Web.png',
    overflow: 'hidden',
  },
  filler: {
    height: '10%',
  },
  headerOne: {
    backgroundColor: '#000',
    height: 63,

    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  icon: { marginTop: '-18%' },
  header: {
    height: 65,
    width: '100%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  title: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 70,
    top: 0,
    marginTop: '1%',
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
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    height: 65,
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'space-evenly',
  },
  tabBarBtn: {
    width: 130,
    height: 65,
    justifyContent: 'center',
  },
  tabBarBtnAct: {
    backgroundColor: 'white',
    width: 130,
    height: 65,
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
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
});
