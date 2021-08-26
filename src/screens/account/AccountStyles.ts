import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container2: {
    marginTop: 55,
    padding: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: colors.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 26,

    elevation: 14,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 29,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  h2: {
    fontSize: 21,
    fontWeight: 'normal',
    color: 'white',
  },
  block: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonContainer: {
    width: 250,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    borderWidth: 2,
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
  editButton: {
    marginBottom: 0,
    justifyContent: 'flex-end',
  },
  ImageAndButton: {
    flex: 1,
    flexDirection: 'row',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
  disabledText: {
    color: '#BFBFBF',
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  disabledButton: {
    borderColor: '#BFBFBF',
    backgroundColor: '#ECECEC',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 2,
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
