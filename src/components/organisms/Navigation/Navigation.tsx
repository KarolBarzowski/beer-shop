import { useLocation } from 'react-router-dom';
import ButtonLink from 'components/atoms/ButtonLink/ButtonLink';
import { Wrapper, Title, Placeholder } from './Navigation.styles';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      {pathname !== '/' ? (
        <ButtonLink to="/">back</ButtonLink>
      ) : (
        <Placeholder />
      )}
      <Title>Beer shop</Title>
      <ButtonLink to="/cart">cart</ButtonLink>
    </Wrapper>
  );
};

export default Navigation;
