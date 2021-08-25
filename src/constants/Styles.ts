import { StyleSheet } from 'react-native';
import colors from './colors';

export const StylesCon = StyleSheet.create({
  phone: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
  filler: {
    height: '10%',
  },
  headerOne: {
    backgroundColor: '#000',
    height: 63,
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
    marginTop: '-0.3%',
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
});
