import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

import { Container } from './styles';
import ProfileCard from '../../components/ProfileCard';

interface Props {
	onCardSwypeStarted: () => void;
	onCardSwypeEnded: () => void;
}

interface State {
	profiles: { name: string; description: string }[];
	currentIndex: Number;
}

class ChoosingPanel extends Component<Props, State> {
	state = {
		profiles: [
			{ name: 'Kamil', description: 'Desc1' },
			{ name: 'Tom', description: 'Desc1' },
			{ name: 'Radek', description: 'Desc1' }
		],
		currentIndex: 0
	};

	onCardSwyped = (isUserLiked) => {
		this.setState({ currentIndex: this.state.currentIndex + 1 });
	};

	render() {
		return <Container width={Dimensions.get('window').width}>{this.renderProfiles()}</Container>;
	}

	renderProfiles = () => {
		return this.state.profiles
			.map((profile, i) => {
				if (i < this.state.currentIndex) {
					return null;
				} else if (i == this.state.currentIndex) {
					return (
						<ProfileCard
							key={profile.name}
							isSwipingActivated={true}
							name={profile.name}
							description={profile.description}
							onPress={() => alert('test')}
							onCardSwypeStarted={this.props.onCardSwypeStarted}
							onCardSwypeEnded={this.props.onCardSwypeEnded}
							onCardSwyped={this.onCardSwyped}
						/>
					);
				} else {
					return (
						<ProfileCard
							key={profile.name}
							isSwipingActivated={false}
							name={profile.name}
							description={profile.description}
							onPress={() => alert('test')}
							onCardSwypeStarted={this.props.onCardSwypeStarted}
							onCardSwypeEnded={this.props.onCardSwypeEnded}
							onCardSwyped={this.onCardSwyped}
						/>
					);
				}
			})
			.reverse();
	};
}

export default ChoosingPanel;
