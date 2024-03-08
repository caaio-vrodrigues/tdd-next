import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// components
import { Flow } from '@/components/flow/Flow';

describe('Flow Component', () => {
  it('Should flow properly.', () => {
    render(<Flow/>);

    screen.getByText('Texto original.');

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    screen.getByText('Texto alterado.');
  });
});
