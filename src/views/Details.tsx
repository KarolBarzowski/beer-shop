import { useParams } from 'react-router-dom';
import { useGetBeersByIdQuery } from 'store';
import Loading from 'components/molecules/Loading/Loading';
import BeerDetails from 'components/organisms/BeerDetails/BeerDetails';

const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBeersByIdQuery(id ? [id] : []);

  if (isLoading) return <Loading />;

  return <BeerDetails id={id} data={data} />;
};

export default Details;
