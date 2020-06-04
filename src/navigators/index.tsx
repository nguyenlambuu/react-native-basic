/**
 * RootContainer
 * @format
 */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Splash } from '../containers/splash';
import { Home } from '../containers/home';
import { Login } from '../containers/login';

const RootNavigator = createSwitchNavigator(
	{
		Splash,
		Home,
		Login
	},
	{
		initialRouteName: 'Splash'
	}
)

const AppNavigators = createAppContainer(RootNavigator);

export default AppNavigators;

