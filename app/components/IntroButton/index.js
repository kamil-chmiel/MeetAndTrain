import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';

const IntroButton = ({ title, color, onPress }) => {
	return (
		<Container color={color} onPress={onPress}>
			<Title color={color}>{title}</Title>
		</Container>
	);
};

export default IntroButton;
