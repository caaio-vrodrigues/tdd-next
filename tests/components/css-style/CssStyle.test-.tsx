import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// components 
import { CssStyle } from '@/components/css-style/CssStyle';

describe('CssStyle Component', () => {
  it('Should render with bg-color green.', () => {
    render(<CssStyle bgColor='green'/>);

    const divEl = screen.getByRole('main');

    expect(divEl).toHaveStyle({ backgroundColor: 'green'});
  });
});