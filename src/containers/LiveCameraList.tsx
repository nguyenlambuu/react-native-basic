import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, Button } from 'react-native';

import { IContainerProps } from '../constants/interfaces';
import { ROUTE_NAME } from '../constants/configs';

class LiveCameraListContainer extends Component<IContainerProps> {
	navigateToScreen = (route: any) => (
		() => {
			const navigateAction = NavigationActions.navigate({
				routeName: route
			});
			this.props.navigation.dispatch(navigateAction);
		})
	render() {
		return (
			<View>
				<Text>Live Camera List</Text>
				<Button title="go to detail" onPress={() => this.props.navigation.navigate(ROUTE_NAME.LIVE_CAMERA_DETAIL)}></Button>
			</View>
		);
	}
}

export const LiveCameraList = LiveCameraListContainer;