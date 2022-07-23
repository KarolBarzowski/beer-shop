import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetBeersByIdQuery, resetBeers } from 'store';
import { SubmitHandler } from 'react-hook-form';
import { CartInterface } from 'interfaces/Cart.interface';
import { FormInputs } from 'interfaces/Form.interface';
import CartItem from 'components/molecules/CartItem/CartItem';
import Form from 'components/organisms/Form/Form';
import { Box, Wrapper, Paragraph } from './Cart.styles';

const Cart = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: { cart: CartInterface[] }) => state.cart);
  const { data, isLoading } = useGetBeersByIdQuery(
    cart.map((cart) => `${cart.id}`)
  );

  const onSubmit: SubmitHandler<FormInputs> = () => {
    dispatch(resetBeers());
    setIsSuccess(true);
  };

  if (isSuccess) return <Paragraph>Success!</Paragraph>;

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
      <Box>
        <Form onSubmit={onSubmit} />
      </Box>
    </Wrapper>
  );
};

export default Cart;
