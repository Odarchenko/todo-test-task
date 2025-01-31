import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../../components/Alert';

describe('Alert Component', () => {
  test('renders alert with message', () => {
    render(<Alert message="Test Alert" type="success" />);
    const alertElement = screen.getByText(/Test Alert/i);
    expect(alertElement).toBeInTheDocument();
  });

  test('does not render when message is not provided', () => {
    const { container } = render(<Alert message="" type="success" />);
    expect(container.firstChild).toBeNull();
  });

  test('renders with correct variant', () => {
    const { container } = render(<Alert message="Test Alert" type="danger" />);
    expect(container.firstChild).toHaveClass('alert-danger');
  });
});
