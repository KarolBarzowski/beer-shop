import { useEffect, useContext } from 'react';
import debounce from 'lodash.debounce';
import { Beer } from 'interfaces/Beer.interface';
import { BeersContext } from 'providers/BeersProvider';
import BeerItem from 'components/molecules/BeerItem/BeerItem';
import Loading from 'components/molecules/Loading/Loading';
import { Grid } from './Home.styles';

const Home = () => {
  const { beers, setPage, isFetching } = useContext(BeersContext);

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
