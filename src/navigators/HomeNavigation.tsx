import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { ROUTE_NAME } from '../constants/configs';
import { Home } from '../containers/home';
import { Event } from '../components/event';

const screens = {
  [ROUTE_NAME.HOME]: Home,
  [ROUTE_NAME.EVENT]: Event,
};

const HomeNavigation = createStackNavigator(
  screens,
  {
    initialRouteName: ROUTE_NAME.HOME,
    defaultNavigationOptions: {
      headerStyle: {
        height: 50,
        backgroundColor: '#4DBD73'
      },
      headerTitleStyle: {
        textAlign: 'center'
      }
    }
  }
);

export default HomeNavigation;