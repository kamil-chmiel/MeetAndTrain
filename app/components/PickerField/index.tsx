import React, {Component} from 'react';
import {Container, Title, Line} from './styles';
import CustomTextInput from '../CustomTextInput';
import RNPickerSelect from 'react-native-picker-select';

interface Props {
  title: string;
  items: object;
}

interface State {
  pickerVisible: boolean;
  value: string;
}

class PickerField extends Component<Props, any> {
  state = {
    pickerVisible: false,
    value: null,
  };

  openPicker = () => {
    this.setState({pickerVisible: !this.state.pickerVisible});
  };

  setChosenValue = value => {
    this.setState({value});
  };

  render() {
    return (
      <Container>
        <Title>{this.props.title}</Title>
        <RNPickerSelect
          onValueChange={value => this.setChosenValue(value)}
          placeholder=""
          items={this.props.items}
        />
        <Line />
      </Container>
    );
  }
}

export default PickerField;
