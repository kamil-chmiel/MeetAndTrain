import React from 'react';
import { Container, Input, Title, Line } from './styles';

const CustomTextInput = (props) => {
	return (
		<Container>
			<Title>{props.title}</Title>
			<Input {...props} />
			<Line />
		</Container>
	);
};

export default CustomTextInput;
