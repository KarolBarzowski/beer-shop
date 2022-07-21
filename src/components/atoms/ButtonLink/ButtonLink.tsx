import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)<{ outlined?: string }>`
  background-color: ${({ theme, outlined }) =>
    outlined === "true" ? 'transparent' : theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-transform: lowercase;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

export default ButtonLink;
