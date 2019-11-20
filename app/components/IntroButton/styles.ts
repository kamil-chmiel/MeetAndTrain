import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	height: 60;
	left: 0;
	right: 0;
	top: 50;
	align-items: center;
	border-color: ${(props) => props.color};
	border-width: 3;
	border-radius: 8;
	margin-bottom: 5;
	margin-top: 5;
`;

export const Title = styled.Text`
	flex: 1;
	margin-top: 14;
	font-size: 20;
	color: ${(props) => props.color};
	font-weight: bold;
`;
