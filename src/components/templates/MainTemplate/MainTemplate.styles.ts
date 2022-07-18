import styled from "styled-components";
import { mediaQueries } from "theme/mediaQueries";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  width: 100%;
  padding: 32px;
  margin: 0 auto;

  ${mediaQueries("xl")`
    max-width: 1536px;
  `};
`;