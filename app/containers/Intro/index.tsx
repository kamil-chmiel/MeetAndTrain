import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-ionicons';
import IntroButton from '../../components/IntroButton';

import {ButtonsContainer} from './styles';

const introScreens = [
  {
    key: 'intro1',
    title: 'Title 1',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'intro2',
    title: 'Title 2',
    backgroundColor: '#febe29',
  },
  {
    key: 'intro3',
    title: 'Title 3',
    backgroundColor: '#8822b5',
  },
];

const Intro = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        slides={introScreens}
        showNextButton={false}
        showDoneButton={false}
      />
      <ButtonsContainer>
        <IntroButton
          title="Sign up"
          color="green"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <IntroButton
          title="Sign in"
          color="white"
          onPress={() => {
            navigation.navigate('MainPanel');
          }}
        />
      </ButtonsContainer>
    </View>
  );
};

export default Intro;
