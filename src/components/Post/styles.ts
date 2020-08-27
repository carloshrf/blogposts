import styled from 'styled-components/native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  background-color: #FFF;
  padding: 10px 20px 20px;

  position: relative;

  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  padding-bottom: 10px;
`;

export const Body = styled.Text`
  font-size: 14px;
  line-height: 22px;
`;

export const DeleteImage = styled.Image`
  width: 25px;
  height: 25px;
`; 

export const DeleteButton= styled(RectButton)<RectButtonProperties>`
  width: 30px;
  height: 30px;

  right: 15px;
  top: 10px;

  justify-content: center;
  align-items: center;

  position: absolute;

  border-radius: 50px;
`;
