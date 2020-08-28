import styled from 'styled-components/native';
import { View } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  height: 300px;
  width: 300px;
  
  background: red;

  padding: 25px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
`;