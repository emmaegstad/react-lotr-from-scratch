import { render, screen } from '@testing-library/react';
import App from './App';

test('renders films and characters links', () => {
  render(<App />);
  const linkElement = screen.getByText(/films/i);
  expect(linkElement).toBeInTheDocument();
});
