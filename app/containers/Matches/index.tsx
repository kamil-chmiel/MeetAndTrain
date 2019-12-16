import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

import { Container } from './styles';

interface Props {}

interface State {}

class Matches extends Component<Props, State> {
	render() {
		return (
			<Container width={Dimensions.get('window').width}>
				<Text>Matches</Text>
			</Container>
		);
	}
}

export default Matches;
