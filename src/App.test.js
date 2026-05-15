import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter heading', () => {
  render(<App />);
  expect(screen.getByText(/counter class/i)).toBeInTheDocument();
});
