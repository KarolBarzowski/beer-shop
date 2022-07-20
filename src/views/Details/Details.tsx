import { useParams } from 'react-router-dom';
import { useGetBeersByIdQuery, addBeer } from 'store';
import { useDispatch } from 'react-redux';
import Loading from 'components/molecules/Loading/Loading';
import Button from 'components/atoms/Button/Button';
import Image from 'components/atoms/Image/Image';
import {
  Wrapper,
  Name,
  Tagline,
  Description,
  Content,
  Indent
} from './Details.styles';

const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBeersByIdQuery(id ? [id] : []);
  const dispatch = useDispatch();

  const handleAddBeerToCart = () => {
    dispatch(addBeer({ id, quantity: 1 }));
  };

  if (isLoading) return <Loading />;

  if (!data || !data.length)
    return (
      <Wrapper>
        <Tagline>Sorry! Beer not found.</Tagline>
      </Wrapper>
    );

  return (
    <Wrapper>
      <Image big src={data[0].image_url} alt={data[0].name} />
      <Content>
        <Name>{data[0].name}</Name>
        <Tagline>{data[0].tagline}</Tagline>
        <Description>{data[0].abv}% alcohol</Description>
        <Description>{data[0].description}</Description>
        <Button onClick={handleAddBeerToCart}>Add to cart</Button>
        <div>
          <Description>Food pairing</Description>
          <Indent>
            {data[0].food_pairing.map((text) => (
              <Description>{text}</Description>
            ))}
          </Indent>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Details;
