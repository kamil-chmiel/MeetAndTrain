import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/usersActions';
import * as userActions from '../../actions/usersActions';

import { Container, YesButton, ButtonImage } from './styles';
import ProfileCard from '../../components/ProfileCard';

interface Profile {
	Name: string;
	Description: string;
}

interface Props {
	onCardSwypeStarted: () => void;
	onCardSwypeEnded: () => void;
	getProfiles: () => void;
	users: { profiles: [Profile] };
}

interface State {
	currentIndex: Number;
}

class ChoosingPanel extends Component<Props, State> {
	state = {
		currentIndex: 0
	};

	componentDidMount() {
		this.getUserProfiles();
	}

	getUserProfiles = async () => {
		await this.props.getProfiles();
	};

	onCardSwyped = (isUserLiked) => {
		this.setState({ currentIndex: this.state.currentIndex + 1 });
		if (isUserLiked) {
			alert('liked');
		}
	};

	render() {
		return <Container width={Dimensions.get('window').width}>{this.renderProfiles()}</Container>;
	}

	renderProfiles = () => {
		return this.props.users.profiles
			.map((profile, i) => {
				if (i < this.state.currentIndex) {
					return null;
				} else if (i == this.state.currentIndex) {
					return (
						<ProfileCard
							key={profile.Name}
							isSwipingActivated={true}
							name={profile.Name}
							description={profile.Description}
							onPress={() => alert('test')}
							onCardSwypeStarted={this.props.onCardSwypeStarted}
							onCardSwypeEnded={this.props.onCardSwypeEnded}
							onCardSwyped={this.onCardSwyped}
						/>
					);
				} else {
					return (
						<ProfileCard
							key={profile.Name}
							isSwipingActivated={false}
							name={profile.Name}
							description={profile.Description}
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

const mapStateToProps = ({ users }) => ({
	users
});

const mapDispatchToProps = {
	...userActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoosingPanel);
