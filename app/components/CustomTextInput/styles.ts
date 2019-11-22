import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
	height: 40;
	align-items: flex-start;
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