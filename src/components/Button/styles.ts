import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100px;
  height: 32px;

  border: 1px #00C100;
  border-radius: 4px;

  background-color: #FFF;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-family: 'Arial';
`;