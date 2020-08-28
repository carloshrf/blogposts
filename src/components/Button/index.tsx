import React from 'react';
import { TouchableOpacityProperties } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProperties {
  children: string;
  inverted?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, inverted, ...rest }) => {
  
  return(
    <Container {...rest} inverted={inverted}>
      <ButtonText inverted={inverted}>{children}</ButtonText>
    </Container>
  );
}

export default Button;