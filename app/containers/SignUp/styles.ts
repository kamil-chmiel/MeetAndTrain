import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const AvatarContainer = styled.TouchableOpacity`
  width: 200;
  height: 200;
  margin-top: 30;
  background-color: gray;
  border-radius: 100;
  margin-left: auto;
  margin-right: auto;
`;

export const Avatar = styled.Image`
  flex: 1;
  border-radius: 100;
`;

export const FormContainer = styled.View`
  width: 80%;
  height: 350;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;
