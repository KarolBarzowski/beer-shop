import styled from 'styled-components';

interface WrapperProps {
  readonly text?: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
  background-color: ${({theme, text}) => text ? "transparent" : theme.colors.primary};
  font-size: ${({theme}) => theme.fontSize.medium};
  font-family: ${({theme}) => theme.fontFamily.elite};
  color: ${({theme}) => theme.colors.text};
  padding: 8px 16px;
  border: 1px solid ${({theme}) => theme.colors.primary};;
  cursor: pointer;
  text-transform: lowercase;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;