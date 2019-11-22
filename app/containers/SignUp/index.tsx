import React, {Component} from 'react';

import {Container, AvatarContainer, Avatar, FormContainer} from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import AvatarPicker from '../../components/AvatarPicker';
import DatePickerField from '../../components/DatePickerField';
import IntroButton from '../../components/IntroButton';
import PickerField from '../../components/PickerField';

interface State {
  name: string;
}

class SignUp extends Component<State> {
  state = {
    name: '',
  };

  onSubmit = () => {
    this.props.navigation.navigate('MainPanel');
  };

  render() {
    return (
      <Container>
        <AvatarPicker />
        <FormContainer>
          <CustomTextInput title="Name" />
          <CustomTextInput title="Password" secureTextEntry />
          <CustomTextInput title="Repeat password" secureTextEntry />
          <DatePickerField title="Birth date" />
          <PickerField title="Gender" />
          <IntroButton title="Submit" onPress={this.onSubmit} />
        </FormContainer>
      </Container>
    );
  }
}

export default SignUp;
