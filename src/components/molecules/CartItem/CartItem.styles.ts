import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const Image = styled.img`
  height: 125px;
  width: auto;
`;

export const Name = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.big};
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 5px;
`;

export const Tagline = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  height: 30px;
  width: 30px;
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.elite};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.elite};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 16px;
  cursor: pointer;
  text-transform: lowercase;
  text-decoration: none;
  border: none;
  margin-top: 10px;

  :hover {
    text-decoration: underline;
  }
`;
