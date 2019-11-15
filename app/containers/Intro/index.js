import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-ionicons';

// import {
// 	Container,
// 	Header,
// 	HeaderGradient,
// 	Logo,
// 	Body,
// 	UrlTitle,
// 	ErrorText,
// 	VersionContainer,
// 	NextButton
// } from './styles';

const introScreens = [
	{
		key: 'intro1',
		title: 'Title 1',
		backgroundColor: '#59b2ab'
	},
	{
		key: 'intro2',
		title: 'Title 2',
		backgroundColor: '#febe29'
	},
	{
		key: 'intro3',
		title: 'Title 3',
		backgroundColor: '#8822b5'
	}
];

const Intro = () => {
	return (
		<View style={{ flex: 1 }}>
			<AppIntroSlider slides={introScreens} showNextButton={false} showDoneButton={false} />
		</View>
	);
};

export default Intro;
