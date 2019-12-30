import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  width: ${props => props.width};
`;

export const TouchableView = styled.TouchableOpacity`
  margin-top: 30;
  width: 80%;
  align-self: center;
  justify-content: center;
`;

export const DataContainer = styled.View`
  width: 90%;
  align-self: center;
`;

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
  font-size: 22;
  text-align: center;
  background-color: lightgrey;
  border-radius: 5;
  overflow: hidden;
`;

export const TreningType = styled.Text`
  margin-top: 8;
  margin-left: 5;
  font-size: 17;
  text-align: center;
  background-color: lightgrey;
  border-radius: 5;
  overflow: hidden;
`;

export const Description = styled.Text`
  margin-top: 8;
  margin-left: 5;
  font-size: 14;
  text-align: center;
  background-color: lightgrey;
  border-radius: 5;
  overflow: hidden;
`;
