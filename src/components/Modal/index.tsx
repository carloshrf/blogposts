import React from 'react';
import { ModalProps } from 'react-native';

import { Container } from './styles';

interface ModalProperties extends ModalProps {
  animationType: 'none' | 'slide' | 'fade';
  transparent: boolean;
  visible: boolean;
  onRequestClose(): void;
  children: Element;
}

const Modal: React.FC<ModalProperties> = ({
  animationType, 
  transparent, 
  visible, 
  onRequestClose, 
  children, 
  ...rest
}) => (
  <Container 
    animationType={'fade'}
    transparent={false}
    visible={visible}
    onRequestClose={onRequestClose}
  >

  </Container>
);

export default Modal;