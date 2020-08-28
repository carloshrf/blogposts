import React from 'react';

import { Modal as ModalContainer, ModalProps }  from 'react-native';

import Button from '../../Button';

import { ModalTitle, Container, ModalContent, ButtonContainer } from './styles';

interface ModalProperties extends ModalProps {
  visible: boolean;
  onClose(postId: number): void;
  onDelete(): void;
}

const Modal: React.FC<ModalProperties> = ({
  visible, 
  onClose,
  onDelete,
}) => {

  return (
    <ModalContainer visible={visible} transparent={true}>
      <Container>
        <ModalContent>
          <ModalTitle>Deseja mesmo remover este post?</ModalTitle>
          <ButtonContainer>
            <Button onPress={() => onClose(0)} inverted={true}>Cancelar</Button>
            <Button onPress={() => onDelete()}>Remover</Button>
          </ButtonContainer>
        </ModalContent>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
