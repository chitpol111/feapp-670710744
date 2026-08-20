import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group members cards', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /สมาชิกกลุ่มของเรา/i })
  ).toBeInTheDocument();

  expect(screen.getByText(/อชิตพล หวานจะโปะ/i)).toBeInTheDocument();
  expect(screen.getByText(/สุจิรา พลอยสำลี/i)).toBeInTheDocument();
  expect(screen.getByText(/วรเมธ บุญใหญ่/i)).toBeInTheDocument();
  expect(screen.getAllByText(/สาขา: IT/i).length).toBeGreaterThanOrEqual(3);
});
