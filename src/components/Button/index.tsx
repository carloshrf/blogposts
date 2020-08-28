import React from 'react';
import { TouchableOpacityProperties } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProperties {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  
  return(
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}

export default Button;