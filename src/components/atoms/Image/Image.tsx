import styled from 'styled-components';

const Image = styled.img<{ big?: boolean }>`
  height: ${({ big }) => (big ? '500px' : '250px')};
  width: auto;
`;

export default Image;
