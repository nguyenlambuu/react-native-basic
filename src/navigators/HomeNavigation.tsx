import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import { ROUTE_NAME } from '../constants/configs';
import { Home } from '../containers/Home';
import { Detail } from '../containers/EventDetail';

const screens = {
  [ROUTE_NAME.HOME]: Home,
  [ROUTE_NAME.DETAIL]: Detail,
};

const HomeNavigator = createStackNavigator(
  screens,
  {
    initialRouteName: ROUTE_NAME.HOME,
    defaultNavigationOptions: {
      headerStyle: {
        height: 50,
        backgroundColor: '#4DBD73'
      },
     headerTitleAlign: 'center',
    }
  }
);

export default HomeNavigator;