import { createStackNavigator } from 'react-navigation-stack';

import { ROUTE_NAME } from '../constants/configs';
import { LiveCameraList } from '../containers/LiveCameraList';
import { LiveCameraDetail } from '../containers/LiveCameraDetail';

const LiveCameraNavigator = createStackNavigator({
    [ROUTE_NAME.LIVE_CAMERA]: LiveCameraList,
    [ROUTE_NAME.LIVE_CAMERA_DETAIL]: LiveCameraDetail
},
    {
        initialRouteName: ROUTE_NAME.LIVE_CAMERA,
        defaultNavigationOptions: {
            headerStyle: {
                height: 50,
                backgroundColor: '#4DBD73'
            },
            headerTitleAlign: 'center',
        }
    });

export default LiveCameraNavigator;