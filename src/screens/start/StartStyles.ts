import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  ellipse: {
    width: '40%',
    height: '20%',
    alignSelf: 'center',
    marginBottom: '30%',
    backgroundColor: 'white',
    borderRadius: 9999,
    transform: [{ scaleX: 3 }],
    position: 'absolute',
    zIndex: 20,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    overflow: 'hidden',
    zIndex: 0,
    minHeight: 785,
    maxHeight: 785,
    width: 388,
    marginLeft: -2,
    borderRadius: 30,
  },
  image: {
    width: 420,
    height: 420,
    alignSelf: 'center',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  containerBtn: {
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
