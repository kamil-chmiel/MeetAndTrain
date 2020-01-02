import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';

import {Container} from './styles';

interface Props {}

interface State {}

class EditProfile extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>EditProfile</Text>
      </Container>
    );
  }
}

export default EditProfile;
