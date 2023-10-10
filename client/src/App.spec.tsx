import '../test/jest.setup';
import { render, screen } from '@testing-library/react';
import App from './App';

test('test demo', async () => {
  render(<App />);
  expect(await screen.findByText(/count is \d+/i)).toBeInTheDocument();
});
