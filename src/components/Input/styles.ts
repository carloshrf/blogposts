import styled from 'styled-components/native';

// interface ContainerProps {
//   height: number;
// }

export const Container = styled.View`
  width: 100%;

  border: 1px #AFB380;
  border-radius: 4px;

  flex-direction: row;

  padding: 0 10px;
  background: #FFF;

`;

export const TextInput = styled.TextInput`
  margin-top: 10px;
  padding-top: 5px;
  /* background: red; */

  color: #AFB380;
  flex: 1;
  font-size: 22px;
  height: 40px;
`;