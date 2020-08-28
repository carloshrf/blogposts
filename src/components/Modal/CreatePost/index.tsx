import React from 'react';

import { Modal as ModalContainer, ModalProps }  from 'react-native';

import Input from '../../Input';
import Button from '../../Button';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ModalTitle, Container, ModalContent, ButtonsContainer, TitleContainer } from './styles';

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
            <TitleContainer>
              <Icon name="plus" size={30} style={{paddingRight: 5}}/>

              <ModalTitle>
                Adicionar novo post
              </ModalTitle>
            </TitleContainer>
          <Input 
            marginBottom={20}
            name="titulo" 
            placeholder="Título" 
            onChangeText={(text) => handleTitleChange(text)} 
          />
          <Input 
            height={120}
            marginBottom={20}
            name="texto" 
            placeholder="Texto" 
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => handleBodyChange(text)} 
          />
          <ButtonsContainer>
            <Button onPress={onClose}>Cancelar</Button>
            <Button onPress={handleCreatePost}>Adicionar</Button>
          </ButtonsContainer>
        </ModalContent>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
