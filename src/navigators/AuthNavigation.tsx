import { createStackNavigator } from 'react-navigation-stack';
import { ROUTE_NAME } from '../constants/configs';
import {Login} from '../containers/Login';

const AuthNavigator = createStackNavigator({
  [ROUTE_NAME.LOGIN]: Login,
},
  {
    initialRouteName: ROUTE_NAME.LOGIN,
    defaultNavigationOptions: {
      headerShown: false
    }
  });

export default AuthNavigator;