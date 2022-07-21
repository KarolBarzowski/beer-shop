import { useDispatch } from 'react-redux';
import { addBeer } from 'store';
import { getShortBeerName } from 'helpers/helperFunctions';
import Button from 'components/atoms/Button/Button';
import ButtonLink from 'components/atoms/ButtonLink/ButtonLink';
import Image from 'components/atoms/Image/Image';
import ImagePlaceholder from 'components/atoms/ImagePlaceholder/ImagePlaceholder';
import {
  Wrapper,
  Name,
  Tagline,
  ImageWrapper,
  Content,
  Actions
} from './BeerItem.styles';

interface BeerItemProps {
  id: number;
  name: string;
  src: string;
  tagline: string;
}

const BeerItem = ({ id, name, src, tagline }: BeerItemProps) => {
  const dispatch = useDispatch();

  const handleAddBeerToCart = () => {
    dispatch(addBeer({ id, quantity: 1 }));
  };

  return (
    <Wrapper>
      {src ? (
        <ImageWrapper>
          <Image src={src} alt={name} />
        </ImageWrapper>
      ) : (
        <ImagePlaceholder />
      )}
      <Content>
        <Name>{name.length > 20 ? getShortBeerName(name) : name}</Name>
        <Tagline>{tagline}</Tagline>
      </Content>
      <Actions>
        <Button onClick={handleAddBeerToCart}>Add to cart</Button>
        <ButtonLink to={`/beer/${id}`} outlined="true">
          Read more
        </ButtonLink>
      </Actions>
    </Wrapper>
  );
};

export default BeerItem;
