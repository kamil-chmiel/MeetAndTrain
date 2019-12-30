import React, {Component} from 'react';
import {Dimensions, SafeAreaView} from 'react-native';

import {
  Container,
  CloseButtonContainer,
  CloseButton,
  Name,
  TreningType,
} from './styles';
import {withNavigation} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';
import {Profile} from '../../models';
import {SliderBox} from 'react-native-image-slider-box';

interface Props {
  navigation: NavigationStackProp<any, any>;
  profile: Profile;
}

interface State {}

class CardDetails extends Component<Props, State> {
  onClosePress = () => {
    this.props.navigation.pop();
  };

  render() {
    const profile = this.props.navigation.getParam('profile', null);

    return (
      <Container>
        <SliderBox
          style={{height: Dimensions.get('window').width}}
          images={[profile.Photo1]}
        />
        <CloseButtonContainer onPress={this.onClosePress}>
          <CloseButton source={require('../../assets/cross.png')} />
        </CloseButtonContainer>

        <Name>{profile.Name}</Name>
        <TreningType>{profile.Description}</TreningType>
      </Container>
    );
  }
}

export default withNavigation(CardDetails);
