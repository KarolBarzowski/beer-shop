import { forwardRef } from 'react';
import { Wrapper, Label, Input } from './FormField.styles';

interface InputProps {
  id: string;
  label: string;
  type?: string;
}

const FormField = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type = 'text', ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input type={type} id={id} ref={ref} {...props} data-testid={label} />
      </Wrapper>
    );
  }
);

export default FormField;
