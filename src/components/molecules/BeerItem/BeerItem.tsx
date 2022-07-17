import { forwardRef } from 'react';
import {
  Grid,
  Typography,
  Card,
  Box,
  CardContent,
  CardActions,
  Button
} from '@mui/material';
import Image from 'components/atoms/Image/Image';
import { getShortBeerName } from 'helpers/helperFunctions';

interface BeerItemProps {
  name: string;
  src: string;
  tagline: string;
}

const BeerItem = forwardRef<HTMLDivElement, BeerItemProps>(
  (
    { name, src, tagline }: BeerItemProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <Grid ref={ref} item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardContent>
          <Box sx={{ textAlign: 'center' }}>
            <Image src={src} alt={name} />
          </Box>
          <Typography variant="h5">
            {name.length > 20 ? getShortBeerName(name) : name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {tagline}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small">
            Add to cart
          </Button>
          <Button variant="text" size="small">
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
);

export default BeerItem;
