import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100px;
  height: 32px;

  border: 1px #00C100;
  border-radius: 4px;

  background-color: #00C100;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-family: 'Arial';
`;