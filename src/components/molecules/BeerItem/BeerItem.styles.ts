import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
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
  font-weight: ${({theme}) => theme.fontWeight.regular};
`;

export const ImageWrapper = styled.div`
  position: relative;
  text-align: center;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background-color: ${({theme}) => theme.colors.primary};
    z-index: -1;
  }
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