import { createStackNavigator } from 'react-navigation-stack';

import MainPanel from '../containers/MainPanel';
import { marineGreen } from '../styles/colors';

const MainNavigator = createStackNavigator({
	MainPanel: {
		screen: MainPanel,
		navigationOptions: {
			headerStyle: {
				backgroundColor: marineGreen
			}
		}
	}
});

export default MainNavigator;
