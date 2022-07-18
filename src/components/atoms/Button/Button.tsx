import { Link } from 'react-router-dom';
import { Wrapper } from './Button.styles';

interface ButtonProps {
  children: string;
  text?: boolean;
  id?: number;
}

const Button = ({ children, text, id }: ButtonProps) => (
  <Wrapper
    as={id ? Link : 'button'}
    to={`/beer/${id}`}
    type="button"
    text={text}
  >
    {children}
  </Wrapper>
);

export default Button;
