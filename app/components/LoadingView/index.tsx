import React, { Component } from 'react';
import { LoadingPanel, LoadingImage } from './styles';
import { Animated, Easing } from 'react-native';

class LoadingView extends Component<any, any> {
	spinValue = new Animated.Value(0);

	spin = this.spinValue.interpolate({
		inputRange: [ 0, 1 ],
		outputRange: [ '0deg', '360deg' ]
	});

	componentDidMount() {
		Animated.loop(
			Animated.timing(this.spinValue, {
				toValue: 1,
				duration: 2200,
				easing: Easing.linear
			})
		).start();
	}

	render() {
		return (
			<LoadingPanel>
				<LoadingImage
					as={Animated.Image}
					style={{ transform: [ { rotate: this.spin } ] }}
					source={require('../../assets/hantla.png')}
				/>
			</LoadingPanel>
		);
	}
}

export default LoadingView;
