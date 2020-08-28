import React from 'react';
import {RectButton} from 'react-native-gesture-handler';

import { Modal as ModalContainer, ModalProps }  from 'react-native';

import Input from '../../Input';
import Button from '../../Button';

import { ModalTitle, Container, ModalContent } from './styles';

interface ModalProperties extends ModalProps {
  visible: boolean;
  onClose(): void;
  handleTitleChange(text: string): void;
  handleBodyChange(text: string): void;
  handleCreatePost(): void;
}

const Modal: React.FC<ModalProperties> = ({
  visible, 
  onClose, 
  handleTitleChange, 
  handleBodyChange,
  handleCreatePost,
}) => {

  return (
    <ModalContainer visible={visible} transparent={true}>
      <Container>
        <ModalContent>
          <ModalTitle>Adicionar novo post</ModalTitle>
          <Input 
            name="titulo" 
            placeholder="Título" 
            onChangeText={(text) => handleTitleChange(text)} 
          />
          <Input 
            name="texto" 
            placeholder="Texto" 
            onChangeText={(text) => handleBodyChange(text)} 
          />
          <Button onPress={onClose}>Cancelar</Button>
          <Button onPress={handleCreatePost}>Adicionar</Button>
        </ModalContent>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
