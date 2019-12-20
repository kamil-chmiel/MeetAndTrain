import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

import { Container } from './styles';
import ProfileCard from '../../components/ProfileCard';

interface Props {}

interface State {
	profiles: { name: string; description: string }[];
}

class ChoosingPanel extends Component<Props, State> {
	state = {
		profiles: [
			{ name: 'Kamil', description: 'Desc1' },
			{ name: 'Tom', description: 'Desc1' },
			{ name: 'Radek', description: 'Desc1' }
		]
	};

	render() {
		return <Container width={Dimensions.get('window').width}>{this.renderProfiles()}</Container>;
	}

	renderProfiles = () => {
		return this.state.profiles.map((profile) => {
			return (
				<ProfileCard
					key={profile.name}
					name={profile.name}
					description={profile.description}
					onPress={() => alert('test')}
				/>
			);
		});
	};
}

export default ChoosingPanel;
