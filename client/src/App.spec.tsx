import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('test demo', async () => {
  render(<App />);
  expect(await screen.findByText(/Count is \d+/i)).toBeInTheDocument();
});
