import { StackNavigationProp } from '@react-navigation/stack';

export type Props = {
  navigation: StackNavigationProp<loginStackParamList, 'List'>;
};

export type loginStackParamList = {
  List: undefined;
  Start: undefined;
  Login: undefined;
  Register: undefined;
  RegisterV2: undefined;
  Home: undefined;
  Account: undefined;
  AddFunds: undefined;
  Transfer: undefined;
  Transactions: undefined;
  ForgotPassword: undefined;
};

export type loginScreenNavigationProp = StackNavigationProp<
  loginStackParamList,
  'Start'
>;

export interface loginProps {
  navigation: loginScreenNavigationProp;
}

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

export type address = {
  street: string;
  number: number;
  zipCode: number;
  city: string;
  province: string;
  country: string;
};

export type userType = {
  email: string;
  dni: number;
  name: string;
  lastName: string;
  birthdate: string;
  phoneNumber: string;
  address: address;
};

export interface accountType {
  email: string;
  balance: number;
  cvu: string;
}

export type resFromBack = {
  user: userType;
  account: Object;
};


export interface RootState {
  account: accountType;
  user: userType;
}
