import styled, {css} from 'styled-components/native';

export const BluredView = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(52, 52, 52, 0.8);
`;

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 50%;
  position: absolute;
  background-color: white;
  border-radius: 10;
`;

export const Title = styled.Text`
  margin-top: 20;
  font-size: 40;
  font-weight: bold;
  align-self: center;
  color: gray;
`;

export const Description = styled.Text`
  margin-top: 7;
  font-size: 15;
  font-weight: 400;
  align-self: center;
  color: gray;
`;

export const Avatar = styled.Image`
  margin-top: 40;
  width: 100;
  height: 100;
  border-radius: 50;
  border-width: 1;
  border-color: lightgray;
  align-self: center;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  margin-left: 30;
  margin-right: 30;
`;
