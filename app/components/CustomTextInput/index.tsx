import React from 'react';
import { Container, Input, Title, Line} from './styles';

const CustomTextInput = ({title, secureTextEntry = false}) => {
	return (
		<Container>
            <Title>{title}</Title>
			<Input secureTextEntry={secureTextEntry}/>
			<Line/>
		</Container>
	);
};

export default CustomTextInput;
