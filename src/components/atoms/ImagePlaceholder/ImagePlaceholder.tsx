import { Wrapper, Paragraph } from './ImagePlaceholder.styles';

const ImagePlaceholder = ({ small }: { small?: boolean }) => (
  <Wrapper small={small}>
    <Paragraph>No image available</Paragraph>
  </Wrapper>
);

export default ImagePlaceholder;
