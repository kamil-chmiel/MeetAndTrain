import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AuthenticationNavigator from './AuthenticationNavigator';

const navigationOptions = {
	header: null
};

const appNavigatorConfig = {
	animationEnabled: false,
	swipeEnabled: false,
	navigationOptions: {
		tabBarVisible: false
	}
};

const AppNavigator = createStackNavigator(
	{
		AuthenticationNavigator: {
			screen: AuthenticationNavigator,
			navigationOptions: {
				header: null
			}
		}
	},
	appNavigatorConfig
);

export default createAppContainer(AppNavigator);
