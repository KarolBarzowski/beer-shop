import { useState, useEffect } from 'react';
import { Beer } from 'interfaces/Beer.interface';
import { api, endpoints } from 'api';
import { Grid, Typography } from '@mui/material';
import Image from 'components/atoms/Image/Image';

const Home = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    api
      .get<Beer[]>(endpoints.beers, { params: { per_page: 24 } })
      .then(({ data }) => {
        setBeers(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        Our beers
      </Typography>
      <Grid container>
        {beers.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Typography>{item.name}</Typography>
            <Image src={item.image_url} alt={item.name} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
