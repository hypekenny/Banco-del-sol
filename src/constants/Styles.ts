import { StyleSheet } from 'react-native';
import { createStyles, maxHeight } from 'react-native-media-queries';

const styles = createStyles(
  // override styles only if screen height is less than 500
  maxHeight(500, {
    logo: {
      height: 120,
    },
  }),
);

export const StylesCon = StyleSheet.create({
  phone: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  frame: {
    borderWidth: 10,
    borderTopWidth: 12,
    borderBottomWidth: 12,
    borderColor: 'black',
    borderRadius: 40,
    overflow: 'hidden',
    width: 411,
    height: 813,
    minHeight: 813,
    maxHeight: 813,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    '@media (max-width: 1600px) and (min-width: 800px)': {
      backgroundColor: 'red',
    },
    '@media (max-width: 800px)': {
      backgroundColor: 'blue',
    },
  },
  filler: {
    height: '10%',
  },
  headerOne: {
    backgroundColor: '#000',
    height: 63,
    width: '100%',
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
  },
  icon: { marginTop: '-18%' },
  header: {
    height: 65,
    width: '100%',
    // borderTopLeftRadius: 22,
    // borderTopRightRadius: 22,
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
