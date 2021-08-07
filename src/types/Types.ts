import { StackNavigationProp } from '@react-navigation/stack';

export type loginStackParamList = {
  List: undefined;
  Start: undefined;
  Login: undefined;
  RegisterStep1: undefined;
  RegisterStep2: undefined;
  Home: undefined;
  Account: undefined;
  AddFunds: undefined;
  Transfer: undefined;
  Transactions: undefined;
};

export type loginScreenNavigationProp = StackNavigationProp<
  loginStackParamList,
  'Start'
>;

export type loginProps = { navigation: loginScreenNavigationProp };

export type mainStackParamList = {
  List: undefined;
  Home: undefined;
  Account: undefined;
  AddFunds: undefined;
  Transfer: undefined;
  History: undefined;
  Transactions: undefined;
};

export type mainScreenNavigationProp = StackNavigationProp<
  mainStackParamList,
  'Home'
>;

export type MainProps = { navigation: mainScreenNavigationProp };
