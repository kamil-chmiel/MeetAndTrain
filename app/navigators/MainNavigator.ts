import {createStackNavigator} from 'react-navigation-stack';

import MainPanel from '../containers/MainPanel';
import CardDetails from '../containers/CardDetails';
import MatchScreen from '../containers/MatchScreen';
import {marineGreen} from '../styles/colors';

const MainNavigator = createStackNavigator(
  {
    MainPanel: {
      screen: MainPanel,
      navigationOptions: {
        headerStyle: {
          backgroundColor: marineGreen,
        },
      },
    },
    CardDetails: {
      screen: CardDetails,
      navigationOptions: {
        header: null,
      },
    },
    MatchScreen: {
      screen: MatchScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    mode: 'modal',
    cardStyle: {opacity: 1},
    transparentCard: true,
  },
);

export default MainNavigator;
