import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  background-color: #eee;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: center;
`;
