import styled, { css } from 'styled-components/native';

export const AvatarContainer = styled.TouchableOpacity`
	width: 200;
	height: 200;
	margin-top: 30;
	background-color: gray;
	border-radius: 10;
	margin-left: auto;
	margin-right: auto;
	justify-content: center;
`;

export const Avatar = styled.Image`
	flex: 1;
	border-radius: 10;
`;

export const PlaceholderText = styled.Text`
	position: absolute;
	align-self: center;
	color: white;
	font-size: 16;
`;
