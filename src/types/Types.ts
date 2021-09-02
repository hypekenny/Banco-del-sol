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
  HomeTab: undefined;
  Account: undefined;
  AccountEdit: undefined;
  AddFunds: undefined;
  Transfer: undefined;
  Transactions: undefined;
  ForgotPassword: undefined;
  LoadingFull: undefined;
  ContactAdd: undefined;
  Contact: undefined;
  ContactDetails: undefined;
  Error: undefined;
  Statistics: undefined;
  AboutUs: undefined;
};

export type burgerStackParamList = {
  screen1: undefined;
  screen2: undefined;
  screen3: undefined;
};

export type burgerDrawerParamList = {
  home: loginStackParamList;
  contacts: undefined;
};

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

export type addressType = {
  street: string;
  number: string;
  zipCode: string;
  city: string;
  province: string;
};

export type userType = {
  email: string;
  dni: string;
  name: string;
  lastName: string;
  birthdate: string;
  phoneNumber: string;
  address: addressType;
  condition: string;
};

export interface accountType {
  email: string;
  balance: balanceType;
  cvu: string;
}

interface balanceType {
  amount: number;
  history: Array<transactionType>;
}

export type transactionType = {
  senderEmail: string;
  receiverEmail: string;
  type: string;
  value: number;
  date: Date;
};

/* OJO que toque el account */
export type resFromBack = {
  user: userType;
  account: accountType;
};

export interface RootState {
  account: accountType;
  user: userType;
  token: string;
  loading: boolean;
  errors: string;
  Contacts: Array<contacts>;
  nameDetail: string;
  message: string;
  succeed: boolean;
  updatedAccount: boolean;
  DetailTransfer: { name: string; email: string };
  tabBarItem: number;
}

export type errors = {
  errors: string;
};

export type contacts = {
  name: string;
  email: string;
  cvu: string;
};
