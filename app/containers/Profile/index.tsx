import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

import { Container } from './styles';

interface Props {}

interface State {}

class Profile extends Component<Props, State> {
	render() {
		return (
			<Container width={Dimensions.get('window').width}>
				<Text>Profile</Text>
			</Container>
		);
	}
}

export default Profile;
