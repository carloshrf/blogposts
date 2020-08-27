import React, { useState } from 'react';

import { ScrollView } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Post from '../../components/Post';
import AddButton from '../../components/AddButton';
import Modal from '../../components/Modal';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, SearchBar, Main, ModalText } from './styles';

const Home: React.FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <Container>
      <SearchBar>
        <Input name="email" icon="mail" placeholder="Buscar" />
      </SearchBar>
      
      <ScrollView>
        <Main>
          <Post title="Titulo entitulado" onDelete={() => setModalIsVisible}>
            Conteudo de qualidade emsad assadsad sadsad sad sadsadsad s sadsadsadsa sad as dsadsadsadsa dsadsadsa sad sadsad sadsadsad sad sadsadsa d sadsadsad
          </Post>
        </Main>
      </ScrollView>

    <AddButton />

    <Modal
      animationType="fade"
      transparent={false}
      visible={modalIsVisible}
      onRequestClose={() => {
        setModalIsVisible(false);
      }}
    >
      <ModalText>Foi</ModalText>
    </Modal>
      {/* 
      <Button onPress={() => {console.log('Apertou')}}>
        Entrar
      </Button> */}
    </Container>
  );
}

export default Home;