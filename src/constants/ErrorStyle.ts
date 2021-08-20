import { StyleSheet } from 'react-native';

export const ErrorStyle = StyleSheet.create({
  errorView: {
    backgroundColor: 'white',
    padding: 20,
    // borderRadius: 25,
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    alignSelf: 'center',
    top: '10%',
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
  },
  errorText: {
    color: 'red',
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    // marginTop: '1%',
  },
});
