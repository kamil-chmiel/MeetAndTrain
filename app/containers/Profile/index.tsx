import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Profile} from '../../models';
import {NavigationStackProp} from 'react-navigation-stack';

import {
  Container,
  TouchableView,
  Picture,
  Name,
  TreningType,
  DataContainer,
  Description,
} from './styles';
import {ButtonsContainer} from '../Profile/styles';
import TitledButton from '../../components/TitledButton';
import {withNavigation} from 'react-navigation';

interface Props {
  navigation: NavigationStackProp<any, any>;
}

interface State {
  profile: Profile;
}

class MyProfile extends Component<Props, State> {
  state = {
    profile: null,
  };

  render() {
    return (
      <Container width={Dimensions.get('window').width}>
        <TouchableView activeOpacity={1}>
          <Picture source={require('../../assets/male-profile-picture.png')} />
        </TouchableView>
        <DataContainer>
          <Name>Tom</Name>
          <TreningType>Trening</TreningType>
          <Description>
            TestowyTestowyTestowyTestowyTestowyTestowyTestowyTestowy
          </Description>
        </DataContainer>
        <ButtonsContainer>
          <TitledButton
            imageSource={require('../../assets/settingsIcon.png')}
            title="Settings"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
          <TitledButton
            imageSource={require('../../assets/editProfileIcon.png')}
            title="Edit profile"
            onPress={() => this.props.navigation.navigate('EditProfile')}
          />
        </ButtonsContainer>
      </Container>
    );
  }
}

export default withNavigation(MyProfile);
