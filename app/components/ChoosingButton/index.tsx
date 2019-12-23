import React from 'react';
import { TouchableContainer, Image } from './styles';

const ChoosingButton = ({ imageSource, onPress }) => {
	return (
		<TouchableContainer onPress={onPress}>
			<Image source={imageSource} />
		</TouchableContainer>
	);
};

export default ChoosingButton;
