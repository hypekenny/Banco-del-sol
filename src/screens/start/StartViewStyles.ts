import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../constants/colors';

let width;
let height;

if (Dimensions.get('window').width < Dimensions.get('window').height) {
  width = Dimensions.get('window').width;
  height = Dimensions.get('window').height;
} else {
  width = 411;
  height = 800;
}
const radius = width / 2;
const scaley = (0.3 * width) / height;
export const styles = StyleSheet.create({
  ellipse: {
    transform: [
      { translateX: width / 2 - radius },
      { scaleY: scaley },
      { translateY: ((0.4 * height - 0.5 * width) * 1) / scaley },
    ],
    backgroundColor: 'white',
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
  },

  containerT: {
    width,
    height,
    alignSelf: 'center',
  },
  containerButton: {
    transform: [{ translateY: 0.05 * height }],
    alignSelf: 'center',
  },
  image: {
    width: width * (294 / 411),
    height: height * (171 / 823),
    transform: [{ translateY: -0.9 * height }],
    alignSelf: 'center',
  },
});
