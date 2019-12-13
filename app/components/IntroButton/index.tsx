import React from 'react';
import { Container, Title } from './styles';

const IntroButton = ({ title, color = 'green', onPress }) => {
	return (
		<Container color={color} onPress={onPress}>
			<Title color={color}>{title}</Title>
		</Container>
	);
};

export default IntroButton;
