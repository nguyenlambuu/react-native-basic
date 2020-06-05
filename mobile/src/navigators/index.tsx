import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import { Splash } from '../containers/Splash';
import { Login } from '../containers/Login';
import { Home } from '../containers/Home';
import { Detail } from '../containers/EventDetail';
import { ChangePassword } from '../containers/ChangePassword';
import { ROUTE_NAME } from '../constants/configs';

const RootNavigator = createSwitchNavigator(
  {
    Splash,
    Login,
    Home,
    Detail,
    ChangePassword,
  },
  {
    initialRouteName: ROUTE_NAME.SPLASH
  },
);

const AppNavigators = createAppContainer(RootNavigator);

export default AppNavigators;

