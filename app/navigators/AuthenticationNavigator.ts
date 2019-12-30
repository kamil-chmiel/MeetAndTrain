import { createStackNavigator } from 'react-navigation-stack';

import Intro from '../containers/Intro';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import SplashScreen from '../containers/SplashScreen';
import MainNavigator from './MainNavigator';

const AuthenticationNavigator = createStackNavigator({
	SplashScreen: {
		screen: SplashScreen,
		navigationOptions: {
			header: null,
			headerBackTitle: ' '
		}
	},
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
