import { StackNavigationProp } from '@react-navigation/stack';

export type rootStackParamList = {
  List: undefined;
  Start: undefined;
  Login: undefined;
  RegisterStep1: undefined;
  RegisterStep2: undefined;
};

export type homeScreenNavigationProp = StackNavigationProp<
  rootStackParamList,
  'Start'
>;

export type props = { navigation: homeScreenNavigationProp };
