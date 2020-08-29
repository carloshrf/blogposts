import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  marginBottom?: number;
  height?: number;
}

const Input: React.FC<InputProps> = ({name, icon, marginBottom, height= 50, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(): void {
    setIsFocused(!isFocused);
  }

  return(
    <Container isFocused={isFocused} style={{marginBottom: marginBottom, height: height}} >
      <TextInput placeholderTextColor="#AFB3B0" onFocus={handleFocus} onBlur={handleFocus} {...rest}/>
      {!!icon && <Icon name={icon} size={40} color="#AFB3B0" style={{marginTop: 3}}/>}
    </Container>
  );
}

export default Input;