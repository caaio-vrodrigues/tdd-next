import '@testing-library/jest-dom';
import { fireEvent, getByRole, render, screen } from '@testing-library/react';

// components
import { IntegrationTest } from '@/components/integration-test/IntegrationTest';

// teste git

describe('IntegrationTest Component', () => {
  it('Should render msg in the document.', () => {
    render(<IntegrationTest/>);

    const msg = screen.getByText('Texto teste para componente de testes de integração.');

    expect(msg).toBeInTheDocument();
  });

  it('Should alter msg in the document on button click.', () => {
    render(<IntegrationTest/>);

    const msg = 'Texto teste para componente de testes de integração.';
    screen.getByText(msg);
    
    const buttonEl = screen.getByRole('button');
    fireEvent.click(buttonEl);

    const removedMsg = screen.queryByText(msg);
    const newMsg = screen.getByText('Texto de testes de integração ALTERADO!');
    
    expect(removedMsg).not.toBeInTheDocument();
    expect(newMsg).toBeInTheDocument();
  });
});