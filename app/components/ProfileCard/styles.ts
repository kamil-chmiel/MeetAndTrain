import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	width: 90%;
	height: 100%;
	position: absolute;
	background-color: white;
	align-self: center;
	border-radius: 10;
	border-color: lightgrey;
	border-width: 3;
`;

export const AnimatedView = styled.View`flex: 1;`;

export const Picture = styled.Image`
	width: 100%;
	padding-top: 100%;
	background-color: grey;
	border-radius: 10;
`;

export const Name = styled.Text`
	margin-top: 10;
	margin-left: 5;
	font-weight: 400;
	font-size: 20;
`;

export const TreningType = styled.Text`
	margin-top: 8;
	margin-left: 5;
	font-size: 15;
`;
