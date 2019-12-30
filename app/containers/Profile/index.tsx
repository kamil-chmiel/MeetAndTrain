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
      </Container>
    );
  }
}

export default MyProfile;
