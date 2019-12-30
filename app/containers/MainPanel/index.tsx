import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {IndicatorViewPager} from 'react-native-best-viewpager';
import ChoosingPanel from '../ChoosingPanel';
import Profile from '../Profile';
import Matches from '../Matches';

import {Container, AvatarContainer, Avatar, FormContainer} from './styles';

interface Props {}

interface State {
  isSwypingEnabled: boolean;
}

class MainPanel extends Component<Props, State> {
  state = {
    isSwypingEnabled: true,
  };

  onCardSwypeStarted = () => {
    this.setState({isSwypingEnabled: false});
  };

  onCardSwypeEnded = () => {
    this.setState({isSwypingEnabled: true});
  };

  render() {
    return (
      <Container>
        <IndicatorViewPager
          scrollEnabled={this.state.isSwypingEnabled}
          initialPage={1}
          style={{flex: 1}}>
          <Profile />
          <ChoosingPanel
            onCardSwypeStarted={this.onCardSwypeStarted}
            onCardSwypeEnded={this.onCardSwypeEnded}
          />
          <Matches />
        </IndicatorViewPager>
      </Container>
    );
  }
}

export default MainPanel;
