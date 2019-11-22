import styled, { css } from 'styled-components/native';

export const ViewContainer = styled.View`
	flex: 1;
    justify-content: flex-end;
`;

export const Container = styled.View`
	height: 280;
	left: 0;
	right: 0;
    background-color: white;
`;

export const ButtonsContainer = styled.View`
    height: 40;
    width: 100%;
    background-color: #BFD4CD;
    border-bottom-width: 1;
    border-bottom-color: gray;
    border-top-width: 1;
    border-top-color: gray;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonText = styled.Text`
    width: 85;
    text-align: center;
    font-weight: bold;
`;

export const DatePickerContainer = styled.View`
	flex: 1;
`;