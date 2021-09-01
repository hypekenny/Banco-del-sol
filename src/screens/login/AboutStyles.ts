import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const stylesAbout = StyleSheet.create({
  about: {
    zIndex: 10,
    backgroundColor: '#fff',
    width: 342,
    maxHeight: 400,
    minHeight: 400,
    position: 'absolute',
    marginLeft: '6%',
    alignItems: 'center',

    marginTop: '-10%',

    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  btnAbout: {
    width: 250,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.primary,
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
  btnText: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  tinyLogo: {
    width: 300,
    height: 150,
  },
  // Abot two
  aboutSelectPhone: {
    right: 0,
    zIndex: 10,
    backgroundColor: '#fff',
    width: 342,
    maxHeight: 400,
    minHeight: 400,
    position: 'absolute',
    marginRight: '8%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '-10%',

    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  btnTextSelect: {
    color: colors.primary,
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },

  btnAboutSelect: {
    width: 250,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.primary,
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
