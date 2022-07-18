import { Wrapper } from './Button.styles';

interface ButtonProps {
  children: string;
  text?: boolean;
}

const Button = ({ children, text }: ButtonProps) => (
  <Wrapper type="button" text={text}>
    {children}
  </Wrapper>
);

export default Button;
