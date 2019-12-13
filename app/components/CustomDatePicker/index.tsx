import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TouchableOpacity, Modal } from 'react-native';
import { ViewContainer, Container, ButtonsContainer, ButtonText, DatePickerContainer } from './styles';
import DatePicker from 'react-native-date-picker';

interface Props {
	isVisible: boolean;
	setVisible: object;
	setChosenDate: object;
	initialDate?: Date;
}

interface State {
	date: Date;
}

class CustomDatePicker extends Component<Props, State> {
	state = {
		date: new Date()
	};

	onCancel = () => {
		this.props.setVisible(false);
	};

	onConfirm = () => {
		this.props.setChosenDate(this.state.date);
		this.props.setVisible(false);
	};

	render() {
		return (
			<Modal animationType="slide" transparent visible={this.props.isVisible}>
				<ViewContainer>
					<Container>
						<ButtonsContainer>
							<TouchableOpacity onPress={this.onCancel}>
								<ButtonText>Cancel</ButtonText>
							</TouchableOpacity>
							<TouchableOpacity onPress={this.onConfirm}>
								<ButtonText>Confirm</ButtonText>
							</TouchableOpacity>
						</ButtonsContainer>
						<DatePickerContainer>
							<DatePicker
								date={this.state.date}
								onDateChange={(date) => this.setState({ date })}
								mode={'date'}
								style={{ width: Dimensions.get('window').width }}
							/>
						</DatePickerContainer>
					</Container>
				</ViewContainer>
			</Modal>
		);
	}
}

export default CustomDatePicker;
