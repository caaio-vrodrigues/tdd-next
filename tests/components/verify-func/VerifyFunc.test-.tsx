import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

// components
import { VerifyFunc } from '@/components/verify-func/VerifyFunc';

const sum = (a: number, b: number): number => a + b;

describe('VerifyFunc Component', () => {
  it('Should result in 8.', () => {
    // testando função diretamente
    expect(sum(4, 4)).toBe(8);
  });

  it('Should execute the func.', () => {
    // testando click
    const onClick = jest.fn();

    render(<VerifyFunc onClick1={onClick}/>);

    const buttonEl = screen.getByText('Click');
    fireEvent.click(buttonEl);

    expect(onClick).toHaveBeenCalled();
  });

  it('Should be called with param 4.', () => {
    // testando parâmetro
    const onClick = jest.fn();

    render(<VerifyFunc onClick2={onClick(4)}/>);

    const buttonEl = screen.getByText('Click 2');
    fireEvent.click(buttonEl);

    expect(onClick).toHaveBeenCalledWith(4); 
  });
});