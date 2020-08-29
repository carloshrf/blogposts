import styled, { css } from 'styled-components/native';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.View<InputProps>`
  width: 100%;

  border: 1px #AFB380;
  border-radius: 4px;

  flex-direction: row;

  padding: 0 8px;
  background: #FFF;

  ${({ isFocused }) => isFocused && css`
    border-color: #00C100;
  `}
`;

export const TextInput = styled.TextInput`
  margin-top: 10px;
  padding-top: 0px;

  color: #AFB380;
  flex: 1;
  font-size: 22px;
  height: 40px;

`;