import React from 'react';

import { Modal as ModalContainer, ModalProps }  from 'react-native';

import Button from '../../Button';

import { ModalTitle, Container, ModalContent, ButtonsContainer, TitleContainer } from './styles';

interface ModalProperties extends ModalProps {
  visible: boolean;
  children: string;
  onClose(): void;
}

const Modal: React.FC<ModalProperties> = ({
  visible,
  children,
  onClose,  
}) => {

  return (
    <ModalContainer visible={visible} transparent={true}>
      <Container>
          <ModalContent>
            <TitleContainer>
              <ModalTitle>
                {children}
              </ModalTitle>
            </TitleContainer>

          <ButtonsContainer>
            <Button onPress={() => onClose()}>Ok</Button>
          </ButtonsContainer>
        </ModalContent>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
