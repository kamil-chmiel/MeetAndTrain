import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	height: 40;
	left: 0;
	right: 0;
	top: 50;
	align-items: flex-start;
	margin-bottom: 5;
	margin-top: 5;
`;

export const Title = styled.Text`
    text-align: left;
    color: gray;
    font-weight: bold;
`;

export const Input = styled.TextInput`
    flex: 1;
    width: 100%;
`;

export const Line = styled.View`
    height: 1;
    width: 100%;
    background-color: green;
`;