import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const Input = styled.input`
  width: 300px;
  height: 45px;
  border: 2px solid black;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.elite};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
