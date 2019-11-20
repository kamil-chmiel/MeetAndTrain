import React, { Component } from 'react';

import {Container, AvatarContainer, Avatar, FormContainer} from './styles'
import CustomTextInput from '../../components/CustomTextInput'
import AvatarPicker from '../../components/AvatarPicker'

class SignUp extends Component {

	state = {
		name: '',

	}

	render() {
		return (
			<Container>
				<AvatarPicker/>
				<FormContainer>
					<CustomTextInput title="Name"/>
					<CustomTextInput title="Age"/>
					<CustomTextInput title="Password" secureTextEntry/>
					<CustomTextInput title="Repeat password" secureTextEntry/>
				</FormContainer>
			</Container>
		)
		
	}
}

export default SignUp;
