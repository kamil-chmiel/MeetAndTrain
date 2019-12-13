import { createStackNavigator } from 'react-navigation-stack';

import Intro from '../containers/Intro';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import MainNavigator from './MainNavigator';

const AuthenticationNavigator = createStackNavigator({
	Intro: {
		screen: Intro,
		navigationOptions: {
			header: null,
			headerBackTitle: ' '
		}
	},
	SignUp: {
		screen: SignUp,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'white'
			},
			headerTitle: 'Sign up'
		}
	},
	SignIn: {
		screen: SignIn,
		navigationOptions: {
			headerStyle: {
				backgroundColor: 'white'
			},
			headerTitle: 'Sign in'
		}
	},
	MainPanel: {
		screen: MainNavigator,
		navigationOptions: {
			header: null,
			gesturesEnabled: false
		}
	}
});

export default AuthenticationNavigator;
