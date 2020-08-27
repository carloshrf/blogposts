import React from 'react';
import { TextInputProps, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => {
  return(
    <Container >
      <TextInput placeholderTextColor="#AFB3B0" {...rest}/>
    </Container>
  );
}

export default Input;