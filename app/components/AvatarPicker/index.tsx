import React, { Component } from 'react';
import { AvatarContainer, Avatar, PlaceholderText } from './styles';
import ImagePicker from 'react-native-image-picker';

class AvatarPicker extends Component {
	state = {
		avatarSource: null
	};

	onAvatarPress = () => {
		const options = {
			title: 'Select Avatar',
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};

		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else {
				const source = { uri: response.uri };
				this.setState({
					avatarSource: source
				});
			}
		});
	};

	render() {
		return (
			<AvatarContainer onPress={this.onAvatarPress}>
				<PlaceholderText>Choose your avatar</PlaceholderText>
				<Avatar source={this.state.avatarSource} />
			</AvatarContainer>
		);
	}
}

export default AvatarPicker;
