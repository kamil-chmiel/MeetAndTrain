import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import { login } from '../../actions/sessionActions';

import { Container, FormContainer } from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import IntroButton from '../../components/IntroButton';

interface State {
	email: string;
	password: string;
}

class SignIn extends Component<any, State> {
	state = {
		email: null,
		password: null
	};

	onChangeValue = (key) => (value) => {
		this.setState({ [key]: value });
	};

	onSubmit = () => {
		const { email, password } = this.state;

		if (this.isEmpty(this.state)) {
			Alert.alert('Sign In', 'You have to fill all fields in order to sign in.');
		} else {
			this.props.login(email, password);
		}
	};

	isEmpty = (data) => {
		for (var key in data) {
			if (data[key] === null) {
				return true;
			}
		}
		return false;
	};

	render() {
		return (
			<Container>
				<FormContainer>
					<CustomTextInput title="Email" onChangeText={this.onChangeValue('email')} />
					<CustomTextInput title="Password" secureTextEntry onChangeText={this.onChangeValue('password')} />
					<IntroButton title="Submit" onPress={this.onSubmit} />
				</FormContainer>
			</Container>
		);
	}
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {
	login
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
