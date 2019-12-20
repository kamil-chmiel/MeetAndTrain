import React, { Component } from 'react';
import { Container, Picture, Name, TreningType, AnimatedView } from './styles';
import { PanResponder, Animated } from 'react-native';

interface Props {
	name: string;
	description: string;
	onPress: () => void;
}

class ProfileCard extends Component<Props, any> {
	position = null;
	panResponder = null;

	constructor() {
		super();
		this.position = new Animated.ValueXY();
	}

	componentWillMount() {
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderMove: (evt, gestureState) => {
				this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
			},
			onPanResponderRelease: (evt, gestureState) => {}
		});
	}

	render() {
		return (
			<Container onPress={this.props.onPress}>
				<AnimatedView as={AnimatedView.View} {...this.panResponder.panHandlers}>
					<Picture />
					<Name>{this.props.name}</Name>
					<TreningType>{this.props.description}</TreningType>
				</AnimatedView>
			</Container>
		);
	}
}

export default ProfileCard;
