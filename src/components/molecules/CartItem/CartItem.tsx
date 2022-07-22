import { ItemProps } from 'interfaces/Item.interface';
import { CartInterface } from 'interfaces/Cart.interface';
import { useSelector, useDispatch } from 'react-redux';
import { addBeer, removeBeer } from 'store';
import ImagePlaceholder from 'components/atoms/ImagePlaceholder/ImagePlaceholder';
import {
  Wrapper,
  Image,
  Name,
  Tagline,
  ButtonIcon,
  Actions,
  Paragraph,
  Button
} from './CartItem.styles';

const CartItem = ({ id, name, tagline, src }: ItemProps) => {
  const dispatch = useDispatch();
  const itemData = useSelector((state: { cart: CartInterface[] }) =>
    state.cart.find((item) => item.id === id)
  );

  const handleAddBeer = () => {
    dispatch(addBeer({ id, quantity: 1 }));
  };

  const handleRemoveBeer = () => {
    if (itemData && itemData.quantity > 1)
      dispatch(addBeer({ id, quantity: -1 }));
  };

  const handleDeleteBeer = () => {
    dispatch(removeBeer({ id }));
  };

  return (
    <Wrapper key={id}>
      {src ? <Image src={src} alt={name} /> : <ImagePlaceholder small />}
      <div>
        <Name>{name}</Name>
        <Tagline>{tagline}</Tagline>
        <Actions>
          <ButtonIcon type="button" onClick={handleRemoveBeer}>
            -
          </ButtonIcon>
          <Paragraph>{itemData?.quantity}</Paragraph>
          <ButtonIcon type="button" onClick={handleAddBeer}>
            +
          </ButtonIcon>
        </Actions>
        <Button type="button" onClick={handleDeleteBeer}>
          remove
        </Button>
      </div>
    </Wrapper>
  );
};

export default CartItem;
