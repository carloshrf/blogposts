import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Button = styled(TouchableOpacity)`
  position: absolute; 

  height: 60px;
  width: 60px;

  border: 1px #AFB3B0;
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
