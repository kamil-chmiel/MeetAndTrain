import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Profile} from '../../models';

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
import ChoosingButton from '../../components/ChoosingButton';

interface Props {}

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
          <ChoosingButton
            imageSource={require('../../assets/settingsIcon.png')}></ChoosingButton>
          <ChoosingButton
            imageSource={require('../../assets/editProfileIcon.png')}></ChoosingButton>
        </ButtonsContainer>
      </Container>
    );
  }
}

export default MyProfile;
