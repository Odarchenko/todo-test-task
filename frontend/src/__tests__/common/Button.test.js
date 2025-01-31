import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../common/Button'; // Adjust the import based on your file structure

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button variant="primary">Click Me</Button>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies the correct variant class', () => {
    const { container } = render(<Button variant="secondary">Test</Button>);
    expect(container.firstChild).toHaveClass('btn-secondary');
  });

  // Add more tests as needed
});
