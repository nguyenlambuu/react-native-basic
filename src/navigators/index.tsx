/**
 * RootContainer
 * @format
 */
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import { ROUTE_NAME } from '../constants/configs';
import { ChangePassword } from '../containers/ChangePassword';
import HomeNavigator from './HomeNavigation';
import AuthNavigator from './AuthNavigation';
import LiveCameraNavigator from './LiveCameraNavigation';

import { Splash } from '../containers/Splash';
import drawerContentComponents from '../components/CustomDrawer';

const SplashNavigator = createStackNavigator(
  { [ROUTE_NAME.SPLASH]: Splash },
  {
    initialRouteName: ROUTE_NAME.SPLASH,
    defaultNavigationOptions: {
      headerShown: false
    }
  });

const MainNavigator = createDrawerNavigator(
  {
    [ROUTE_NAME.HOME]: HomeNavigator,
    [ROUTE_NAME.CHANGE_PASSWORD]: ChangePassword,
    [ROUTE_NAME.LIVE_CAMERA]: LiveCameraNavigator
  }, {
  contentComponent: drawerContentComponents
}
);

const RootNavigator = createSwitchNavigator(
  {
    [ROUTE_NAME.SPLASH]: SplashNavigator,
    MainNavigator,
    AuthNavigator,
  },
  {
    initialRouteName: ROUTE_NAME.SPLASH
  }
);

const AppNavigators = createAppContainer(RootNavigator);

export default AppNavigators;
