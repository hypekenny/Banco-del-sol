import { StyleSheet } from 'react-native';

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
