import React from 'react';
import {TouchableContainer, Image, Title} from './styles';

const TitledButton = ({imageSource, onPress, title}) => {
  return (
    <TouchableContainer onPress={onPress}>
      <Image source={imageSource} />
      <Title>{title}</Title>
    </TouchableContainer>
  );
};

export default TitledButton;
