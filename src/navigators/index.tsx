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

import { Splash } from '../containers/Splash';
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import { Detail } from '../containers/EventDetail';
import drawerContentComponents from '../components/CustomDrawer';


// // const HomeStackNavigator = createStackNavigator({
// // 	Home,
// // 	Detail
// // }, {
// // 	defaultNavigationOptions: ({ navigation }) => {
// // 		return {
// // 			// headerLeft: () =>
// // 			// 	<Icon name="md-menu" size={30} color="#000" onPress={() => navigation.openDrawer()} />,
// // 			headerStyle: {
// // 				backgroundColor: '#4DBD73',
// // 			},
// // 			headerTitleAlign: 'center',
// // 			headerLeftContainerStyle: {
// // 			}
// // 		}
// // 	},
// // });


// const AppDrawerNavigator = createDrawerNavigator({
// 	Home: HomeStackNavigator,
// }, {
// })

// const RootNavigator = createSwitchNavigator(
// 	{
// 		Splash: { screen: Splash },
// 		Login: { screen: Login },
// 		Home: { screen: AppDrawerNavigator },

// 	}
// )



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
  }, {
  contentComponent: drawerContentComponents
}
);

const RootNavigator = createSwitchNavigator(
  {
    [ROUTE_NAME.SPLASH]: SplashNavigator,
    MainNavigator,
    AuthNavigator
  },
  {
    initialRouteName: ROUTE_NAME.SPLASH
  }
);

const AppNavigators = createAppContainer(RootNavigator);

export default AppNavigators;
