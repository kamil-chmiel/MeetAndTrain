import { createStackNavigator } from 'react-navigation-stack';

import MainPanel from '../containers/MainPanel';
import CardDetails from '../containers/CardDetails';
import { marineGreen } from '../styles/colors';

const MainNavigator = createStackNavigator(
	{
		MainPanel: {
			screen: MainPanel,
			navigationOptions: {
				headerStyle: {
					backgroundColor: marineGreen
				}
			}
		},
		CardDetails: {
			screen: CardDetails,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		mode: 'modal'
	}
);

export default MainNavigator;
