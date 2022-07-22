import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetBeersByIdQuery } from 'store';
import { CartInterface } from 'interfaces/Cart.interface';
import { Box, Wrapper, Paragraph } from './Cart.styles';
import CartItem from 'components/molecules/CartItem/CartItem';

const Cart = () => {
  const cart = useSelector((state: { cart: CartInterface[] }) => state.cart);
  const { data, isLoading } = useGetBeersByIdQuery(
    cart.map((cart) => `${cart.id}`)
  );

  if (isLoading) return <Paragraph>Loading...</Paragraph>;

  if (!data?.length) return <Paragraph>Your cart is empty!</Paragraph>;

  return (
    <Wrapper>
      <Box>
        {data.map(({ id, name, tagline, image_url }) => (
          <CartItem
            key={id}
            id={id}
            name={name}
            tagline={tagline}
            src={image_url}
          />
        ))}
      </Box>
      <Box></Box>
    </Wrapper>
  );
};

export default Cart;
