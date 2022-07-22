import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputs } from 'interfaces/Form.interface';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { Paragraph, Wrapper } from './Form.styles';

const Form = ({ onSubmit }: { onSubmit: SubmitHandler<FormInputs> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>();

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Name"
        id="name"
        {...register('name', { required: true })}
      />
      <Paragraph error>
        {errors.name?.type === 'required' && 'Name is required'}
      </Paragraph>
      <FormField
        label="Address"
        id="address"
        {...register('address', { required: true })}
      />
      <Paragraph error>
        {errors.address?.type === 'required' && 'Address is required'}
      </Paragraph>
      <FormField
        label="Postal code"
        id="postalCode"
        {...register('postalCode', {
          required: true,
          pattern: /^[0-9]{2}-[0-9]{3}/
        })}
      />
      <Paragraph error>
        {errors.postalCode?.type === 'required' && 'Postal code is required'}
        {errors.postalCode?.type === 'pattern' && 'Postal code is wrong'}
      </Paragraph>
      <FormField
        label="City"
        id="city"
        {...register('city', { required: true })}
      />
      <Paragraph error>
        {errors.city?.type === 'required' && 'City is required'}
      </Paragraph>
      <FormField
        label="Email"
        id="email"
        {...register('email', {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        })}
      />
      <Paragraph error>
        {errors.email?.type === 'required' && 'Email is required'}
        {errors.email?.type === 'pattern' && 'Email is wrong'}
      </Paragraph>
      <Button type="submit">buy</Button>
    </Wrapper>
  );
};

export default Form;
