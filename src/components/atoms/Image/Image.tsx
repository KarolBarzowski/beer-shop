import Box from '@mui/material/Box';

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => (
  <Box
    component="img"
    sx={{
      height: 250,
      width: 'auto'
    }}
    alt={alt}
    src={src}
  />
);

export default Image;
