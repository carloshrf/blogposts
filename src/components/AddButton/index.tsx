import React from 'react';

import { TouchableOpacityProperties } from 'react-native';

import { Button } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface ButtonProperties extends TouchableOpacityProperties{
  setModalIsVisible(): void;
}

const AddButton: React.FC<ButtonProperties> = ({setModalIsVisible, ...rest}) => (
  <Button onPress={setModalIsVisible} {...rest}>
    <Icon name="plus" size={30} color="#AFB3B0" />
  </Button>
);

export default AddButton;