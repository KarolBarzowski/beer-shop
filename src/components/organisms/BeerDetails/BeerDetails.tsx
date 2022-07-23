import { useDispatch } from 'react-redux';
import { addBeer } from 'store';
import Button from 'components/atoms/Button/Button';
import Image from 'components/atoms/Image/Image';
import ImagePlaceholder from 'components/atoms/ImagePlaceholder/ImagePlaceholder';
import { Beer } from 'interfaces/Beer.interface';
import {
  Wrapper,
  Name,
  Tagline,
  Description,
  Content,
  Indent
} from './BeerDetails.styles';

const BeerDetails = ({
  data,
  id
}: {
  data: Beer[] | undefined;
  id: string | undefined;
}) => {
  const dispatch = useDispatch();

  const handleAddBeerToCart = () => {
    if (id !== undefined) dispatch(addBeer({ id: parseInt(id), quantity: 1 }));
  };

  if (!data || !data.length)
    return (
      <Wrapper>
        <Tagline>Sorry! Beer not found.</Tagline>
      </Wrapper>
    );

  return (
    <Wrapper>
      {data[0].image_url ? (
        <Image big src={data[0].image_url} alt={data[0].name} />
      ) : (
        <ImagePlaceholder />
      )}
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
              <Description key={text}>{text}</Description>
            ))}
          </Indent>
        </div>
      </Content>
    </Wrapper>
  );
};

export default BeerDetails;
