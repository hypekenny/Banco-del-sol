import React from 'react';
import { Icon } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { StylesCon } from '../../constants/Styles';
import colors from '../../constants/colors';
import { Props, RootState } from '../../types/Types';
import { setTabBarItem } from '../../redux/actions';

export const NavBar = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const tabBarItem = useSelector((state: RootState) => state.tabBarItem);
  return (
    <View>
      <LinearGradient
        style={StylesCon.tabBar}
        colors={[colors.primary, colors.secondary]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <TouchableOpacity
          style={
            tabBarItem === 1 ? StylesCon.tabBarBtnAct : StylesCon.tabBarBtn
          }
          onPress={() => {
            dispatch(setTabBarItem(1));
            navigation.push('HomeTab');
          }}
        >
          <Icon
            type="material-community"
            name="home"
            size={35}
            color={tabBarItem === 1 ? colors.primary : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            tabBarItem === 2 ? StylesCon.tabBarBtnAct : StylesCon.tabBarBtn
          }
          onPress={() => {
            dispatch(setTabBarItem(2));
            navigation.push('Transactions');
          }}
        >
          <Icon
            type="material-community"
            name="swap-horizontal-bold"
            size={35}
            color={tabBarItem === 2 ? colors.primary : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={
            tabBarItem === 3 ? StylesCon.tabBarBtnAct : StylesCon.tabBarBtn
          }
          onPress={() => {
            dispatch(setTabBarItem(3));
            navigation.push('Statistics');
          }}
        >
          <Icon
            type="material-community"
            name="trending-up"
            size={35}
            color={tabBarItem === 3 ? colors.primary : 'white'}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
