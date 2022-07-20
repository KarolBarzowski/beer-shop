import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 150px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 150px;
  z-index: 1;
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
