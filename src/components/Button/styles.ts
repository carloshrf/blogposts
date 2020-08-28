import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface ButtonProperties {
  inverted?: boolean;
  disabled?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProperties>`
  width: 100px;
  height: 32px;

  border: 1px #00C100;
  border-radius: 4px;

  background-color: #00C100;

  justify-content: center;
  align-items: center;

  ${({ inverted }) => inverted && css`
    background-color: #FFF !important;
  `}

  ${({ disabled }) => disabled && css`
    background-color: #D8D8D8;
    border-color: #D8D8D8;
  `}
`;

export const ButtonText = styled.Text<ButtonProperties>`
  color: #FFF;
  font-family: 'Arial';

  ${({ inverted }) => inverted && css`
    color: #00C100;
  `}

  ${({ disabled }) => disabled && css`
    color: #FFF !important;
  `}
`;