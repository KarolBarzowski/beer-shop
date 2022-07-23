import { useContext } from 'react';
import { BeersContext } from 'providers/BeersProvider';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import Loading from 'components/molecules/Loading/Loading';
import BeersList from 'components/organisms/BeersList/BeersList';

const Home = () => {
  const { beers, setPage, isFetching } = useContext(BeersContext);
  useInfiniteScroll(setPage);

  return (
    <>
      {isFetching ? <Loading /> : null}
      <BeersList beers={beers} />
    </>
  );
};

export default Home;
