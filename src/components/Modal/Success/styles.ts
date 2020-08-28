import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  width: 300px;
  
  background: #FFF;
  border: 1px #00C100;

  padding: 25px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const ModalTitle = styled.Text`
  font-size: 18px;
`;

export const ButtonsContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
`;