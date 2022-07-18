import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid black;
  padding: 12px;
`;

export const Name = styled.h5`
  font-size: ${({theme}) => theme.fontSize.big};
  font-family: ${({theme}) => theme.fontFamily.rubik};
  color: ${({theme}) => theme.colors.text};
  font-weight: ${({theme}) => theme.fontWeight.bold}
`;

export const Tagline = styled.p`
  font-size: ${({theme}) => theme.fontSize.medium};
  font-family: ${({theme}) => theme.fontFamily.elite};
  color: ${({theme}) => theme.colors.text};
  font-weight: ${({theme}) => theme.fontWeight.regular}
`;

export const ImageWrapper = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  margin: 15px 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
`;