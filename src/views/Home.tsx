import { useState, useEffect, useRef, useCallback } from 'react';
import { Beer } from 'interfaces/Beer.interface';
import { api, endpoints } from 'api';
import { Grid, Typography } from '@mui/material';
import BeerItem from 'components/molecules/BeerItem/BeerItem';

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [beers, setBeers] = useState<Beer[]>([]);
  const lastBeerRef = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);

    api
      .get<Beer[]>(endpoints.beers, { params: { per_page: 8, page } })
      .then(({ data }) => {
        setBeers((prevState) => [...prevState, ...data]);
        setPage((prevState) => prevState + 1);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [isLoading, page]);

  useEffect(() => {
    const options = {
      root: document,
      threshold: 1
    };

    function callback(entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting) {
        fetchAPI();
      }
    }

    observer.current = new IntersectionObserver(callback, options);
    if (lastBeerRef.current) {
      observer.current.observe(lastBeerRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [fetchAPI]);

  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        Our beers
      </Typography>
      <Grid container>
        {beers.map(({ id, name, image_url }, i) =>
          i === beers.length - 1 ? (
            <BeerItem key={id} name={name} src={image_url} ref={lastBeerRef} />
          ) : (
            <BeerItem key={id} name={name} src={image_url} />
          )
        )}
      </Grid>
    </>
  );
};

export default Home;
