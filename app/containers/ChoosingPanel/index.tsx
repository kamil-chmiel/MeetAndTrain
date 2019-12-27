import React, { Component } from 'react';
import { Animated, Easing, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { getProfiles, sendResult } from '../../actions/usersActions';
import * as userActions from '../../actions/usersActions';

import { Container, CardsContainer, ButtonsContainer, NoProfilesText, LoadingPanel, LoadingImage } from './styles';
import ChoosingButton from '../../components/ChoosingButton';
import ProfileCard from '../../components/ProfileCard';
import LoadingView from '../../components/LoadingView';

interface Profile {
	id: Number;
	Name: string;
	Description: string;
}

interface Props {
	onCardSwypeStarted: () => void;
	onCardSwypeEnded: () => void;
	getProfiles: (userId) => void;
	sendResult: (userId: Number, partnerId: Number, decision: Boolean) => void;
	users: { profiles: [Profile] };
	session: { userId: Number };
}

interface State {
	currentIndex: Number;
	loading: Boolean;
}

class ChoosingPanel extends Component<Props, State> {
	state = {
		currentIndex: 0,
		loading: false
	};

	componentDidMount() {
		this.getUserProfiles();
	}

	getUserProfiles = async () => {
		this.setState({ loading: true });
		await this.props.getProfiles(this.props.session.userId);
		this.setState({ loading: false });
	};

	onCardSwyped = (isUserLiked) => {
		this.onDecisionMade(isUserLiked);
	};

	onChoosingButtonPressed = (isUserLiked) => {
		this.onDecisionMade(isUserLiked);
	};

	onDecisionMade = (result) => {
		const { session, users } = this.props;
		this.props.sendResult(session.userId, users.profiles[this.state.currentIndex].id, result);
		this.setState({ currentIndex: this.state.currentIndex + 1 });
	};

	render() {
		return (
			<Container width={Dimensions.get('window').width}>
				{this.renderLoadingPanel()}
				<CardsContainer width={Dimensions.get('window').width}>{this.renderProfiles()}</CardsContainer>
				{this.renderChoosingButtons()}
			</Container>
		);
	}

	renderLoadingPanel = () => {
		if (this.state.loading) {
			return <LoadingView />;
		}
	};

	renderChoosingButtons = () => {
		if (!this.state.loading) {
			return (
				<ButtonsContainer width={Dimensions.get('window').width / 1.7}>
					<ChoosingButton
						imageSource={require('../../assets/no_button.png')}
						onPress={() => this.onChoosingButtonPressed(false)}
					/>
					<ChoosingButton
						imageSource={require('../../assets/yes_button.png')}
						onPress={() => this.onChoosingButtonPressed(true)}
					/>
				</ButtonsContainer>
			);
		}
	};

	renderProfiles = () => {
		if (this.props.users.profiles.length === 0) {
			return <NoProfilesText>Theres no profile right now.</NoProfilesText>;
		}
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

const mapStateToProps = ({ users, session }) => ({
	users,
	session
});

const mapDispatchToProps = {
	...userActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoosingPanel);
