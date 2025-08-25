import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet } from 'react-native';

import { iconsName } from '../components/common/icon';
import { TabButton } from '../components/bottonTaps';
import { useSelector } from 'react-redux';
import imgReq from '../constants/imgReq';
import Movies from '../screens/dashboard/movies';
import Search from '../screens/dashboard/search';
import WatchList from '../screens/dashboard/watch_list';
import { colors } from '../constants/colors';

const Tab = createBottomTabNavigator();

type TabItem = {
  id: number;
  title: string;
  screen: string;
  icon1: string;
  icon2: string;
  iconType: any;
  Component: React.ComponentType<any>;
};

const platform = Platform.OS === 'ios';

const BottomTabScreens = () => {
  const bottomMenu: TabItem[] = [
    {
      id: 1,
      title: 'Home',
      screen: 'home',
      icon1: imgReq?.home,
      icon2: imgReq?.sub_home,
      iconType: iconsName.Octicons,
      Component: Movies,
    },
    {
      id: 2,
      title: 'Search',
      screen: 'search',
      icon1: imgReq?.search,
      icon2: imgReq?.sub_search,
      iconType: iconsName.FontAwesome,
      Component: Search,
    },
    {
      id: 3,
      title: 'Watch List',
      screen: 'watchlist',
      icon1: imgReq?.watch,
      icon2: imgReq?.sub_watch,
      iconType: iconsName.MaterialCommunityIcons,
      Component: WatchList,
    },
  ];

  const handlePressed = (v: any) => {
    if (v?.onPress) {
      v.onPress();
    }
  };

  return (
    <Tab.Navigator
      initialRouteName={'home'}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: true,
      }}
    >
      {bottomMenu.map((item, index) => (
        <Tab.Screen
          key={item.id}
          name={item.screen}
          component={item.Component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: props => (
              <TabButton
                index={index}
                props={props}
                item={item}
                onPress={() => handlePressed(props)}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: platform ? 120 : 85,
    position: 'absolute',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopWidth: 1,
    borderColor: colors?.secondary,
    backgroundColor: colors?.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabScreens;
