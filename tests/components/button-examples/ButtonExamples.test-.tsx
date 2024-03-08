import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

// components
import { ButtonExamples } from '@/components/button-examples/ButtonExamples';

describe('Button Component', () => {
  it("Should have text 'Click' and don't show 'msgTest' in the document.", () => {
    render(<ButtonExamples/>);

    const buttonEl = screen.getByRole('button');
    const msgTest = screen.queryByText('That message should not be in the document.');

    expect(buttonEl).toHaveTextContent('Click');

    // inverter - combina com tudo
    expect(msgTest).not.toBeInTheDocument(); // Não esqueça do screen.queryByText()
  });
});