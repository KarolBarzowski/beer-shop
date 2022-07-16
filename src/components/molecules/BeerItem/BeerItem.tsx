import { forwardRef } from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'components/atoms/Image/Image';

interface BeerItemProps {
  name: string;
  src: string;
}

const BeerItem = forwardRef<HTMLDivElement, BeerItemProps>(
  ({ name, src }: BeerItemProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <Grid ref={ref} item xs={12} sm={6} md={4} lg={3}>
      <Typography>{name}</Typography>
      <Image src={src} alt={name} />
    </Grid>
  )
);

export default BeerItem;
