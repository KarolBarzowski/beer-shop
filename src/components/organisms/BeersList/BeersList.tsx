import BeerItem from 'components/molecules/BeerItem/BeerItem';
import { Beer } from 'interfaces/Beer.interface';
import { Grid } from './BeersList.styles';

const BeersList = ({ beers }: { beers: Beer[] }) => (
  <Grid>
    {beers.map(({ id, name, image_url, tagline }: Beer) => (
      <BeerItem
        key={id}
        id={id}
        name={name}
        src={image_url}
        tagline={tagline}
      />
    ))}
  </Grid>
);

export default BeersList;
