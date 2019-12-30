import React, { Component } from 'react';
import { Container, Title, Line } from './styles';
import RNPickerSelect from 'react-native-picker-select';

interface Props {
	title: string;
	items: object;
	onChange: (value: number) => void;
}

interface State {
	pickerVisible: boolean;
	value: number;
}

class PickerField extends Component<Props, State> {
	state = {
		pickerVisible: false,
		value: null
	};

	openPicker = () => {
		this.setState({ pickerVisible: !this.state.pickerVisible });
	};

	setChosenValue = (value) => {
		this.setState({ value });
		this.props.onChange(value);
	};

	render() {
		return (
			<Container>
				<Title>{this.props.title}</Title>
				<RNPickerSelect
					onValueChange={(value) => this.setChosenValue(value)}
					placeholder=""
					items={this.props.items}
				/>
				<Line />
			</Container>
		);
	}
}

export default PickerField;
