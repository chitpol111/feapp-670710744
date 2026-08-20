import { render, screen } from '@testing-library/react';
import App from './App';

test('renders movie app header and content', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /moviehub/i })
  ).toBeInTheDocument();

  expect(screen.getByText(/รายการหนังจะมาอยู่ตรงนี้/i)).toBeInTheDocument();
  expect(screen.getByText(/© 2026 วิชา 520 341/i)).toBeInTheDocument();
});
