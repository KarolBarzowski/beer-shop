import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: auto 0;
`;

export const Paragraph = styled.p`
  margin: auto;
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.elite};
`;
