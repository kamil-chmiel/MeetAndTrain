import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10;
  margin-top: 40;
  align-self: flex-end;
`;

export const CloseButton = styled.Image`
  width: 30;
  height: 30;
`;

export const Name = styled.Text`
  margin-top: 20;
  margin-left: 20;
  font-weight: 400;
  font-size: 20;
`;

export const TreningType = styled.Text`
  margin-top: 10;
  margin-left: 20;
  font-size: 15;
`;
