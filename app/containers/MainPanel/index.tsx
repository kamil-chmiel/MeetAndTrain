import React, { Component } from 'react';
import { Text } from 'react-native';

import { Container, AvatarContainer, Avatar, FormContainer } from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import AvatarPicker from '../../components/AvatarPicker';
import DatePickerField from '../../components/DatePickerField';
import IntroButton from '../../components/IntroButton';

interface Props {}

interface State {}

class MainPanel extends Component<Props, State> {
	render() {
		return (
			<Container>
				<Text>Main Panel</Text>
			</Container>
		);
	}
}

export default MainPanel;
