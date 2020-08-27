import React from 'react';

import { Container } from './styles';

import ModalContainer from 'react-native-modal';

interface ModalProperties {
  isVisible: boolean;
}

const Modal: React.FC<ModalProperties> = ({isVisible, children}) => {
  return (
    <Container >
      <ModalContainer isVisible={isVisible} >
        {children}
      </ModalContainer>
    </Container>
  );
};

export default Modal;
