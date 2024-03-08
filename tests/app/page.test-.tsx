import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// components
import Home from '@/app/page';

describe('Home Page', () => {
  it('Should to have text Hello World!', () => {
    render(<Home/>);

    const text = screen.getByText('Hello World!');

    expect(text).toBeInTheDocument();
  });
});