import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 10px;
  margin: auto;
`;

export const Paragraph = styled.p<{ error?: boolean }>`
  font-size: ${({ theme, error }) =>
    error ? theme.fontSize.small : theme.fontSize.big};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
