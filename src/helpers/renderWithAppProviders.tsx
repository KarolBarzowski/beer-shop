import { render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';

export const renderWithAppProviders = (children: React.ReactNode) => {
  return render(<AppProviders>{children}</AppProviders>);
};
