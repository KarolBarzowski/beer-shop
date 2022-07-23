import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  gap: 100px;
`;

export const Name = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.huge};
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ::before {
    content: '';
    position: absolute;
    top: -5%;
    left: -5%;
    height: 110%;
    width: 110%;
    background: ${({ theme }) => theme.colors.primary};
    z-index: -1;
  }
`;

export const Tagline = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.big};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.text};
  line-height: 20px;
  text-align: justify;
  max-width: 500px;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 25px;
`;

export const Indent = styled.div`
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
  background-color: rgba(255, 208, 0, 0.38);
`;
