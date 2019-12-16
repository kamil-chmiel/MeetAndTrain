import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { IndicatorViewPager } from 'react-native-best-viewpager';
import ChoosingPanel from '../ChoosingPanel';
import Profile from '../Profile';
import Matches from '../Matches';

import { Container, AvatarContainer, Avatar, FormContainer } from './styles';

interface Props {}

interface State {}

class MainPanel extends Component<Props, State> {
	render() {
		return (
			<Container>
				<IndicatorViewPager initialPage={1} style={{ flex: 1 }}>
					<Profile />
					<ChoosingPanel />
					<Matches />
				</IndicatorViewPager>
			</Container>
		);
	}
}

export default MainPanel;
