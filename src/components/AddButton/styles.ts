import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  position: absolute; 

  height: 60px;
  width: 60px;

  border: 2px #AFB3B0;
  border-radius: 50px;
  background: #FFF;

  bottom: 30px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonImage = styled.Image`
`;
