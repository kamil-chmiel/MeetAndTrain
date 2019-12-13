import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';

import { register } from '../../actions/sessionActions';

import { Container, FormContainer } from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import AvatarPicker from '../../components/AvatarPicker';
import DatePickerField from '../../components/DatePickerField';
import IntroButton from '../../components/IntroButton';
import PickerField from '../../components/PickerField';

interface State {
	name: string;
	surname: string;
	email: string;
	password: string;
	repeatedPassword: string;
	birthDate: string;
	genderType: number;
}

class SignUp extends Component<any, State> {
	state = {
		name: null,
		surname: null,
		email: null,
		password: null,
		repeatedPassword: null,
		birthDate: null,
		genderType: null
	};

	onChangeValue = (key) => (value) => {
		this.setState({ [key]: value });
	};

	onSubmit = () => {
		const { name, surname, email, password, birthDate, genderType } = this.state;

		if (this.isEmpty(this.state)) {
			Alert.alert('Sign Up', 'You have to fill all fields in order to sign up.');
		} else {
			this.props.register(name, surname, email, password, birthDate, genderType);
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
				<AvatarPicker />
				<FormContainer>
					<CustomTextInput title="Name" onChangeText={this.onChangeValue('name')} />
					<CustomTextInput title="Surname" onChangeText={this.onChangeValue('surname')} />
					<CustomTextInput title="Email" onChangeText={this.onChangeValue('email')} />
					<CustomTextInput title="Password" secureTextEntry onChangeText={this.onChangeValue('password')} />
					<CustomTextInput
						title="Repeat password"
						secureTextEntry
						onChangeText={this.onChangeValue('repeatedPassword')}
					/>
					<DatePickerField title="Birth date" onChange={this.onChangeValue('birthDate')} />
					<PickerField
						title="Gender"
						items={[
							{ label: 'Female', value: '0' },
							{ label: 'Male', value: '1' },
							{ label: 'Other', value: '2' }
						]}
						onChange={this.onChangeValue('genderType')}
					/>
					<IntroButton title="Submit" onPress={this.onSubmit} />
				</FormContainer>
			</Container>
		);
	}
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {
	register
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
