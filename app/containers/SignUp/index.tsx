import React, { Component } from 'react';

import {Container, AvatarContainer, Avatar, FormContainer} from './styles'
import CustomTextInput from '../../components/CustomTextInput'
import AvatarPicker from '../../components/AvatarPicker'
import DatePickerField from '../../components/DatePickerField'


interface Props {
}

interface State {
	name: string;
}

class SignUp extends Component<Props, State> {

	state = {
		name: '',

	}

	render() {
		return (
			<Container>
				<AvatarPicker/>
				<FormContainer>
					<CustomTextInput title="Name"/>
					<CustomTextInput title="Password" secureTextEntry/>
					<CustomTextInput title="Repeat password" secureTextEntry/>
					<DatePickerField title="Birth date"/>
				</FormContainer>
			</Container>
		)
		
	}
}

export default SignUp;
