import Form from 'components/organisms/Form/Form';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithAppProviders } from 'helpers/renderWithAppProviders';

describe('Form test', () => {
  it('Renders the component', () => {
    renderWithAppProviders(<Form onSubmit={() => null} />);

    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/address/i)).toBeInTheDocument();
    expect(screen.getByText(/postal code/i)).toBeInTheDocument();
    expect(screen.getByText(/city/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/buy/i)).toBeInTheDocument();
  });

  it('Displays error messages', async () => {
    renderWithAppProviders(<Form onSubmit={() => null} />);

    fireEvent.submit(screen.getByRole('button', { name: /buy/i }));
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/address is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/postal code is required/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/city is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });

  it('Validates Postal Code', async () => {
    renderWithAppProviders(<Form onSubmit={() => null} />);

    fireEvent.submit(screen.getByRole('button', { name: /buy/i }));

    fireEvent.change(screen.getByTestId('Postal code'), {
      target: { value: '12345' }
    });
    await screen.findByText(/postal code is wrong/i);

    fireEvent.change(screen.getByTestId('Postal code'), {
      target: { value: '' }
    });
    await screen.findByText(/postal code is required/i);
  });
});
