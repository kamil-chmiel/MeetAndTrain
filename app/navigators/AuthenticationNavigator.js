import { createStackNavigator } from 'react-navigation-stack';

import Intro from '../containers/Intro';

const AuthenticationNavigator = createStackNavigator({
	Intro: {
		screen: Intro,
		navigationOptions: {
			header: null
		}
	}
});

export default AuthenticationNavigator;
