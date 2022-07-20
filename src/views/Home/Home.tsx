import { useState, useEffect } from 'react';
import { Beer } from 'interfaces/Beer.interface';
import BeerItem from 'components/molecules/BeerItem/BeerItem';
import Loading from 'components/molecules/Loading/Loading';
import { Grid } from './Home.styles';
import { useLazyGetBeersQuery } from 'store';
import debounce from 'lodash.debounce';

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [beers, setBeers] = useState<Beer[]>([]);
  const [trigger, { data, isFetching }] = useLazyGetBeersQuery();

  useEffect(() => {
    trigger(page);
  }, [page]);

  useEffect(() => {
    setBeers((prevState) => [...prevState, ...(data ?? [])]);
  }, [data]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const { offsetHeight } = document.body;
      const { innerHeight, scrollY } = window;

      if (innerHeight + scrollY >= offsetHeight - 100) {
        setPage((prevState) => prevState + 1);
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isFetching ? <Loading /> : null}
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
    </>
  );
};

export default Home;
