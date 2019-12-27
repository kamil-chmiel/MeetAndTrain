import React, {Component} from 'react';
import {
  BluredView,
  Container,
  Title,
  Description,
  Avatar,
  ButtonsContainer,
} from './styles';
import IntroButton from '../../components/IntroButton';
import {withNavigation} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';
import {Profile} from '../../models';

interface Props {
  profile: Profile;
  navigation: NavigationStackProp<any, any>;
}

interface State {}

class MatchScreen extends Component<Props, State> {
  onPlanTrainingPress = () => {};

  onDismissPress = () => {
    this.props.navigation.pop();
  };

  render() {
    const profile = this.props.navigation.getParam('profile', null);
    return (
      <BluredView>
        <Container>
          <Title>It's a match!</Title>
          <Description>{`You and ${profile.Name} want to train together!`}</Description>
          <Avatar source={{uri: profile.Photo1}} />
          <ButtonsContainer>
            <IntroButton
              title="Plan your training"
              onPress={this.onPlanTrainingPress}
            />
            <IntroButton
              title="Search for more trainings"
              onPress={this.onDismissPress}
              color="gray"
            />
          </ButtonsContainer>
        </Container>
      </BluredView>
    );
  }
}

export default withNavigation(MatchScreen);
