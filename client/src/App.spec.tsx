import '../test/jest.setup';
import { render } from '@testing-library/react';
import App from './App';

test('test demo', async () => {
  render(<App />);
  expect(1 + 2).toBe(3);
});
