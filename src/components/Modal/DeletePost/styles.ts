import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  /* height: 300px; */
  width: 300px;

  border: 1px #00C100;
  background-color: #FFF;
  padding: 40px 35px 20px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  padding-bottom: 30px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;  

`