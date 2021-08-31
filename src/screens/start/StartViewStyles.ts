import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const radius = width / 2;
const scaley = (0.3 * width) / height;
export const styles = StyleSheet.create({
  ellipse: {
    /*    transform: [
      { translateX: width / 2 - radius },
      { scaleY: scaley },
      { translateY: ((0.4 * height - 0.5 * width) * 1) / scaley },
    ],
    backgroundColor: 'white',
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius, */
  },

  /*  containerT: {
    width: width,
    height: height,
  }, */
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
  containerButton: {
    width: 300,
    alignSelf: 'center',
  },
  image: {
    padding: 50,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
