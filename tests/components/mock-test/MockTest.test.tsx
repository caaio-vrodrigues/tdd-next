import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

// components
import { MockTest } from '@/components/mock-test/MockTest';

describe('MockTest Component', () => {
  const server = setupServer(
    http.get('https://jsonplaceholder.typicode.com/todos?_limit=10', async () => {
      return HttpResponse.json([
        {
          title: 'delectus aut autem',
        },
      ]);
    })
  );

  beforeAll(() => {
    server.listen();
  });

  it('Should fetch and find the button in the screen.', () => {
    render(<MockTest/>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});