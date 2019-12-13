import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'react-native-best-viewpager';

import {Container, AvatarContainer, Avatar, FormContainer} from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import AvatarPicker from '../../components/AvatarPicker';
import DatePickerField from '../../components/DatePickerField';
import IntroButton from '../../components/IntroButton';
import SignIn from '../../containers/SignIn';

interface Props {}

interface State {}

class MainPanel extends Component<Props, State> {
  render() {
    return (
      <Container>
        <IndicatorViewPager style={{flex: 1}}>
          <View style={{backgroundColor: 'cadetblue'}}>
            <Text>page one</Text>
          </View>
          <View style={{backgroundColor: 'cornflowerblue'}}>
            <Text>page two</Text>
          </View>
          <View style={{backgroundColor: '#1AA094'}}>
            <Text>page three</Text>
          </View>
        </IndicatorViewPager>
      </Container>
    );
  }
}

export default MainPanel;
