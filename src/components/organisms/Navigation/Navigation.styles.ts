import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: ${({theme}) => theme.fontSize.huge};
  font-family: ${({theme}) => theme.fontFamily.rubik};
  color: ${({theme}) => theme.colors.text};
  font-weight: ${({theme}) => theme.fontWeight.bold}
`;

export const Placeholder = styled.span`
  width: 70px;
`;