import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigation = createStackNavigator(
	{
		Search: SearchScreen,
		ResultsShow: ResultsShowScreen,
	},
	{
		initalRouteName: 'Search',
		defaultNavigationOptions: {
			title: 'Bussiness Search',
		},
	}
);

export default createAppContainer(navigation);
