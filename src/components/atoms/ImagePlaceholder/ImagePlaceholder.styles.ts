import styled from 'styled-components';

export const Wrapper = styled.div<{ small?: boolean }>`
  position: relative;
  height: ${({ small }) => (small ? '125px' : '250px')};
  width: ${({ small }) => (small ? '75px' : '250px')};
  background-color: #eee;
  margin: ${({ small }) => (small ? '0' : '0 auto')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: center;
`;
