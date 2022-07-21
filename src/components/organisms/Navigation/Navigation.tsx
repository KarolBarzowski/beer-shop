import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonLink from 'components/atoms/ButtonLink/ButtonLink';
import { Wrapper, Title, Placeholder } from './Navigation.styles';
import { useSelector } from 'react-redux';
import { CartInterface } from 'interfaces/Cart.interface';

const Navigation = () => {
  const [count, setCount] = useState(0);
  const { pathname } = useLocation();
  const data = useSelector((state: { cart: CartInterface[] }) => state.cart);

  useEffect(() => {
    const sum = data.reduce((sum, obj) => {
      return sum + obj.quantity;
    }, 0);

    setCount(sum);
  }, [data]);

  return (
    <Wrapper>
      {pathname !== '/' ? (
        <ButtonLink to="/">back</ButtonLink>
      ) : (
        <Placeholder />
      )}
      <Title>Beer shop</Title>
      <ButtonLink to="/cart">cart ({count})</ButtonLink>
    </Wrapper>
  );
};

export default Navigation;
