import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

import { Container } from './styles';

interface Props {}

interface State {}

class ChoosingPanel extends Component<Props, State> {
	render() {
		return (
			<Container width={Dimensions.get('window').width}>
				<Text>Choosing</Text>
			</Container>
		);
	}
}

export default ChoosingPanel;
