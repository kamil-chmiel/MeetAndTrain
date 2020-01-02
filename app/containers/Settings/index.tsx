import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';

import {Container} from './styles';

interface Props {}

interface State {}

class Settings extends Component<Props, State> {
  render() {
    return (
      <Container>
        <Text>Settings</Text>
      </Container>
    );
  }
}

export default Settings;
