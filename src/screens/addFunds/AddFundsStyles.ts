import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignSelf: 'center',
    minHeight: 750,
    width: 411,
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 6,
  },
  text: {
    width: '80%',
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 30,
  },
  amountInput: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,
    elevation: 14,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    width: '80%',
    alignSelf: 'center',
    padding: 20,
    color: '#212020',
    marginTop: '10%',
  },
  header: {
    height: 65,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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

  headerOne: { backgroundColor: '#000', height: 63 },

  icon: { marginTop: '-18%' },
});
