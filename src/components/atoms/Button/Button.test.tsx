import Button from './Button';
import { screen } from '@testing-library/react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

const children = 'Test value';

describe('Button test', () => {
  it('Renders the component', () => {
    renderWithThemeProvider(<Button>{children}</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(children);
  });
});
