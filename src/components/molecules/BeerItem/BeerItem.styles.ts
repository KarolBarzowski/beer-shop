import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid black;
  padding: 8px;
`;

export const Name = styled.h5`
  font-size: ${({theme}) => theme.fontSize.big};
  font-family: ${({theme}) => theme.fontFamily.rubik};
  color: ${({theme}) => theme.colors.text};
`;

export const Tagline = styled.p`
  font-size: ${({theme}) => theme.fontSize.small};
  font-family: ${({theme}) => theme.fontFamily.elite};
  color: ${({theme}) => theme.colors.text};
`;

export const ImageWrapper = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  margin: 10px 0;
`;

export const Actions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
`;