import { createStackNavigator } from 'react-navigation-stack';

import MainPanel from '../containers/MainPanel';

const MainNavigator = createStackNavigator({
	MainPanel: {
		screen: MainPanel,
		navigationOptions: {
			header: null
		}
	}
});

export default MainNavigator;
