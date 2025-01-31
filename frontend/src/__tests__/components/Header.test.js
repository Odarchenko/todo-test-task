import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../components/Header';

describe('Header Component', () => {
  test('renders header with title and button', () => {
    const onAddClick = jest.fn();
    render(<Header onAddClick={onAddClick} />);

    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Add Todo/i })
    ).toBeInTheDocument();
  });

  test('calls onAddClick when button is clicked', () => {
    const onAddClick = jest.fn();
    render(<Header onAddClick={onAddClick} />);

    screen.getByRole('button', { name: /Add Todo/i }).click();
    expect(onAddClick).toHaveBeenCalled();
  });
});
