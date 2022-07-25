import BeerItem from 'components/molecules/BeerItem/BeerItem';
import { screen } from '@testing-library/react';
import { getShortBeerName } from 'helpers/getShortBeerName';
import { renderWithAppProviders } from 'helpers/renderWithAppProviders';

const shortName = 'Beer name';
const longName = 'Very long Beer name over 20 letters';
const src = 'https://via.placeholder.com/150';
const tagline = 'Beer tagline';
const id = 123;

describe('BeerItem test', () => {
  it('Renders the component', () => {
    renderWithAppProviders(
      <BeerItem id={id} name={shortName} src={src} tagline={tagline} />
    );

    expect(screen.getByText(shortName)).toBeInTheDocument();

    expect(screen.getByText(tagline)).toBeInTheDocument();
  });

  it('Properly handles long beer name', () => {
    renderWithAppProviders(
      <BeerItem id={id} name={longName} src={src} tagline={tagline} />
    );

    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(
      getShortBeerName(longName)
    );
  });
});
