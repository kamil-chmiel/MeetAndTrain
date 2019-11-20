import React, { Component } from 'react';

import {Container, AvatarContainer, Avatar, FormContainer} from './styles'
import CustomTextInput from '../../components/CustomTextInput'

class SignUp extends Component {
	render() {
		return (
			<Container>
				<AvatarContainer> 
					<Avatar/>
				</AvatarContainer>
				<FormContainer>
					<CustomTextInput title="Name"/>
					<CustomTextInput title="Age"/>
					<CustomTextInput title="Name"/>
				</FormContainer>
			</Container>
		)
		
	}
}

export default SignUp;
