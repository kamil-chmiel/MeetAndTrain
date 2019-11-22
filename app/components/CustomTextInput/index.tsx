import React from 'react';
import { Container, Input, Title, Line } from './styles';

const CustomTextInput = ({ title, value, secureTextEntry = false, editable = true }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Input secureTextEntry={secureTextEntry} editable={editable} value={value} />
			<Line />
		</Container>
	);
};

export default CustomTextInput;
