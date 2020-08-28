import React from 'react';
import { TouchableOpacityProperties } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProperties {
  children: string;
  inverted?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, inverted, disabled=false, ...rest }) => {
  
  return(
    <Container {...rest} inverted={inverted} disabled={disabled} >
      <ButtonText inverted={inverted}>{children}</ButtonText>
    </Container>
  );
}

export default Button;