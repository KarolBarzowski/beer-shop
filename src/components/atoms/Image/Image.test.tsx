import Image from 'components/atoms/Image/Image';
import { render, screen } from '@testing-library/react';

const src = 'https://via.placeholder.com/150';
const alt = 'Alternative text';

describe('Image test', () => {
  it('Renders the component', () => {
    render(<Image src={src} alt={alt} />);

    const image = screen.getByAltText(alt);
    expect(image).toHaveAttribute('src', src);
    expect(image).toHaveAttribute('alt', alt);
  });
});
