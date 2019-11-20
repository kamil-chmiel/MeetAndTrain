import React from 'react';
import { Container, Input, Title, Line} from './styles';

const CustomTextInput = ({title}) => {
	return (
		<Container>
            <Title>{title}</Title>
			<Input/>
			<Line/>
		</Container>
	);
};

export default CustomTextInput;
