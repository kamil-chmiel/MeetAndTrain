import React from 'react';
import { TouchableContainer, Image } from './styles';

const IntroButton = ({ imageSource, onPress }) => {
	return (
		<TouchableContainer onPress={onPress}>
			<Image source={imageSource} />
		</TouchableContainer>
	);
};

export default IntroButton;
