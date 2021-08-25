import { StyleSheet } from 'react-native';

export const ButtonTertiaryStyle = StyleSheet.create({
  button: {
    width: 250,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
  text: {
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  gradientButtonDisabled: {
    width: 250,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: '#ffffff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
});
