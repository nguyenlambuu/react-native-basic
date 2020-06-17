import { createStackNavigator } from 'react-navigation-stack';

import { ROUTE_NAME } from '../constants/configs';
import { Home } from '../containers/Home';
import { EventDetail } from '../containers/EventDetail';
import ModalComponent from '../components/Modal';

const screens = {
  [ROUTE_NAME.HOME]: Home,
  [ROUTE_NAME.EVENT_DETAIL]: EventDetail,
  [ROUTE_NAME.MODAL]: ModalComponent
};

const HomeNavigator = createStackNavigator(
  screens,
  {
    initialRouteName: ROUTE_NAME.HOME,
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default HomeNavigator;