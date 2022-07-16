import PropTypes, { InferProps } from 'prop-types';
import Box from '@mui/material/Box';

function Image({ src, alt }: InferProps<typeof Image.propTypes>) {
  return (
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
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Image;
