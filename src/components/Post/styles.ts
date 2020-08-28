import styled from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProperties } from 'react-native';

export const Container = styled.View`
  width: 100%;
  background-color: #FFF;
  padding: 20px 20px 20px;

  margin-bottom: 20px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;

  font-family: "PingFang-SC-Medium";
  width: 260px;
  padding-bottom: 10px;
`;

export const Body = styled.Text`
  font-family: "Arial";
  font-size: 14px;
  line-height: 22px;
`;

export const DeleteImage = styled.Image`
  width: 25px;
  height: 25px;
`; 

export const DeleteButton= styled(TouchableOpacity)<TouchableOpacityProperties>`
  width: 40px;
  height: 40px;
  
  margin-right: 10px;

  padding: 5px;

  justify-content: center;
  align-items: center;

  border-radius: 50px;
`;
