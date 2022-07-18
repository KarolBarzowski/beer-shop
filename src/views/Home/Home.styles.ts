import styled from "styled-components";
import { mediaQueries } from "theme/mediaQueries";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;

  ${mediaQueries("sm")`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${mediaQueries("md")`
    grid-template-columns: repeat(3, 1fr);
  `};

  ${mediaQueries("lg")`
    grid-template-columns: repeat(4, 1fr);
  `};
`;