import React from 'react';
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

  return(
    <Container style={{marginBottom: marginBottom, height: height}} >
      <TextInput placeholderTextColor="#AFB3B0" {...rest}/>
      {!!icon && <Icon name={icon} size={40} color="#AFB3B0" style={{marginTop: 3}}/>}
    </Container>
  );
}

export default Input;