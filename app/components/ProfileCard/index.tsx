import React, { Component } from 'react';
import { Container, Picture, Name, TreningType, AnimatedView } from './styles';
import { PanResponder, Animated, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

interface Props {
	name: string;
	description: string;
	isSwipingActivated: boolean;
	onPress: () => void;
	onCardSwypeStarted: () => void;
	onCardSwypeEnded: () => void;
	onCardSwyped: (boolean) => void;
}

class ProfileCard extends Component<Props, any> {
	position = new Animated.ValueXY();
	panResponder = null;

	componentWillMount() {
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderMove: (evt, gestureState) => {
				this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
			},
			onPanResponderGrant: (evt, gestureState) => {
				this.props.onCardSwypeStarted();
			},
			onPanResponderRelease: (evt, gestureState) => {
				this.props.onCardSwypeEnded();
				if (gestureState.dx > 120) {
					Animated.spring(this.position, {
						toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
					}).start(() => {
						this.props.onCardSwyped(true);
						this.position.setValue({ x: 0, y: 0 });
					});
				} else if (gestureState.dx < -120) {
					Animated.spring(this.position, {
						toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
					}).start(() => {
						this.props.onCardSwyped(false);
						this.position.setValue({ x: 0, y: 0 });
					});
				} else {
					Animated.spring(this.position, {
						toValue: { x: 0, y: 0 },
						friction: 4
					}).start();
				}
			}
		});
	}

	rotate = this.position.x.interpolate({
		inputRange: [ -SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2 ],
		outputRange: [ '-10deg', '0deg', '10deg' ],
		extrapolate: 'clamp'
	});

	nextCardOpacity = this.position.x.interpolate({
		inputRange: [ -SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2 ],
		outputRange: [ 1, 1, 1 ],
		extrapolate: 'clamp'
	});

	nextCardScale = this.position.x.interpolate({
		inputRange: [ -SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2 ],
		outputRange: [ 1, 0.8, 1 ],
		extrapolate: 'clamp'
	});

	rotateTransform = [
		{
			rotate: this.rotate
		},
		...this.position.getTranslateTransform()
	];

	render() {
		return (
			<Animated.View
				{...this.panResponder.panHandlers}
				style={[
					{
						transform: this.props.isSwipingActivated ? this.rotateTransform : null
					},
					{
						width: '90%',
						height: '100%',
						position: 'absolute',
						backgroundColor: 'white',
						alignSelf: 'center',
						borderRadius: 10,
						borderColor: 'lightgrey',
						borderWidth: 3
					}
				]}
				onPress={this.props.onPress}
			>
				<Picture />
				<Name>{this.props.name}</Name>
				<TreningType>{this.props.description}</TreningType>
			</Animated.View>
		);
	}
}

export default ProfileCard;
