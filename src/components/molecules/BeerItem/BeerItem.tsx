import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBeer } from 'store';
import Image from 'components/atoms/Image/Image';
import { getShortBeerName } from 'helpers/helperFunctions';
import {
  Wrapper,
  Name,
  Tagline,
  ImageWrapper,
  Content,
  Actions
} from './BeerItem.styles';
import Button from 'components/atoms/Button/Button';
import ButtonLink from 'components/atoms/ButtonLink/ButtonLink';

interface BeerItemProps {
  id: number;
  name: string;
  src: string;
  tagline: string;
}

const BeerItem = forwardRef<HTMLDivElement, BeerItemProps>(
  (
    { id, name, src, tagline }: BeerItemProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dispatch = useDispatch();

    

    const handleAddBeerToCart = () => {
      dispatch(addBeer({ id, quantity: 1 }));
    };

    return (
      <Wrapper ref={ref}>
        <ImageWrapper>
          <Image src={src} alt={name} />
        </ImageWrapper>
        <Content>
          <Name>{name.length > 20 ? getShortBeerName(name) : name}</Name>
          <Tagline>{tagline}</Tagline>
        </Content>
        <Actions>
          <Button onClick={handleAddBeerToCart}>Add to cart</Button>
          <ButtonLink to={`/beer/${id}`} outlined>
            Read more
          </ButtonLink>
        </Actions>
      </Wrapper>
    );
  }
);

export default BeerItem;
