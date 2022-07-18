import { Img } from './Image.styles';

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => <Img alt={alt} src={src} />;

export default Image;
