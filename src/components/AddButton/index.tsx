import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';

import { Button, ButtonImage } from './styles';

import AddImage from '../../assets/icons/add.png';

interface ButtonProperties extends RectButtonProperties{
  setModalIsVisible(): void;
}

const AddButton: React.FC<ButtonProperties> = ({setModalIsVisible, ...rest}) => (
  <Button onPress={setModalIsVisible} {...rest}>
    <ButtonImage source={AddImage} />
  </Button>
);

export default AddButton;