import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { ROUTE_NAME } from '../constants/configs';
import { Splash } from '../containers/splash';
import { ChangePassword } from '../containers/change-password';
import {EventDetail} from '../containers/event-detail';
import HomeNavigation  from './HomeNavigation';
import AuthNavigation  from './AuthNavigation';

const SplashNavigation = createStackNavigator(
  { [ROUTE_NAME.SPLASH]: Splash },
  {
    initialRouteName: ROUTE_NAME.SPLASH,
    defaultNavigationOptions: {
      headerShown: false
    }
  });

const MainNavigation = createDrawerNavigator(
  {
    [ROUTE_NAME.HOME]: HomeNavigation,
    [ROUTE_NAME.CHANGE_PASSWORD]: ChangePassword,
  }
);

const RootNavigation = createSwitchNavigator(
  {
    ChangePassword: ChangePassword,
    MainNavigation,
    AuthNavigation
  },
  {
    initialRouteName: 'ChangePassword'
  }
);

const AppNavigations = createAppContainer(RootNavigation);

export default AppNavigations;
