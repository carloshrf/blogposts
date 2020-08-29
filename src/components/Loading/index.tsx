import React from 'react';
import { Container, LoadingMessage } from './styles';

const Loading: React.FC = () => {

  return (
    <Container>
      <LoadingMessage>Carregando posts...</LoadingMessage>
    </Container>
  );
}

export default Loading;