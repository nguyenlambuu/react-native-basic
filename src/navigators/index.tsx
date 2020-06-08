import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { ROUTE_NAME } from '../constants/configs';
import { Splash } from '../containers/Splash';
import { ChangePassword } from '../containers/ChangePassword';
import HomeNavigator  from './HomeNavigation';
import AuthNavigator  from './AuthNavigation';

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
