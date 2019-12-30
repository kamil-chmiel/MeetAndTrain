import styled from 'styled-components/native';

export const Container = styled.View`width: ${(props) => props.width};`;

export const CardsContainer = styled.View`
	height: 65%;
	width: ${(props) => props.width};
	margin-top: 30;
`;

export const ButtonsContainer = styled.View`
	flex: 1;
	flex-direction: row;
	align-self: center;
	align-items: center;
	justify-content: space-around;
	width: ${(props) => props.width};
`;

export const NoProfilesText = styled.Text`
	margin-top: 70;
	text-align: center;
	font-size: 16;
`;
