import React, {Component} from 'react';
import {Container} from './styles';
import CustomTextInput from '../CustomTextInput';
import CustomDatePicker from '../CustomDatePicker';
import moment from 'moment';

interface Props {
  title: string;
}

interface State {
  datePickerVisible: boolean;
  date: Date;
}

class DatePickerField extends Component<Props, any> {
  state = {
    datePickerVisible: false,
    date: null,
  };

  openDatePicker = () => {
    this.setState({datePickerVisible: !this.state.datePickerVisible});
  };

  setChosenDate = date => {
    this.setState({date});
  };

  render() {
    return (
      <Container onPress={this.openDatePicker}>
        <CustomTextInput
          title={this.props.title}
          editable={false}
          value={
            this.state.date != null
              ? moment(this.state.date).format('DD-MM-YYYY')
              : ''
          }
        />
        <CustomDatePicker
          isVisible={this.state.datePickerVisible}
          setVisible={datePickerVisible => this.setState({datePickerVisible})}
          setChosenDate={date => this.setChosenDate(date)}
        />
      </Container>
    );
  }
}

export default DatePickerField;
