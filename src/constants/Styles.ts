import { StyleSheet, Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const StylesCon = StyleSheet.create({
  phone: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  frame: {
    borderRadius: 30,
    overflow: 'hidden',
    width: 388,
    height: 785,
    left: -1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  filler: {
    height: '10%',
  },
  headerOne: {
    backgroundColor: '#000',
    height: 63,
    width: '100%',
  },
  icon: { marginTop: '-18%' },
  header: {
    height: 65,
    width: '100%',
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
    // borderBottomRightRadius: 30,
    // borderBottomLeftRadius: 30,
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
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
