import styled from 'styled-components';
import { mediaQueries } from 'theme/mediaQueries';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: auto;
  overflow-y: auto;

  ${mediaQueries('md')`
    width: 50%;
    height: calc(100vh - 200px);
  `};
`;

export const Paragraph = styled.p`
  margin: auto;
  font-size: ${({ theme }) => theme.fontSize.big};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.elite};
`;
