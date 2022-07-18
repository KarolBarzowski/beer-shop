import BeerItem from 'components/molecules/BeerItem/BeerItem';
import { render, screen } from '@testing-library/react';
import { getShortBeerName } from 'helpers/helperFunctions';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

const shortName = 'Beer name';
const longName = 'Very long Beer name over 20 letters';
const src = 'https://via.placeholder.com/150';
const tagline = 'Beer tagline';

describe('BeerItem test', () => {
  it('Renders the component', () => {
    renderWithThemeProvider(
      <BeerItem name={shortName} src={src} tagline={tagline} />
    );

    expect(screen.getByText(shortName)).toBeInTheDocument();

    expect(screen.getByText(tagline)).toBeInTheDocument();
  });

  it('Properly handles long beer name', () => {
    renderWithThemeProvider(
      <BeerItem name={longName} src={src} tagline={tagline} />
    );

    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(
      getShortBeerName(longName)
    );
  });
});
