import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../components/Header';
import '../test-utils';

describe('Header Component', () => {
  test('renders header with title and button', () => {
    const onAddClick = jest.fn();
    render(<Header onAddClick={onAddClick} />);

    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Add Todo' })
    ).toBeInTheDocument();
  });

  test('calls onAddClick when button is clicked', () => {
    const onAddClick = jest.fn();
    render(<Header onAddClick={onAddClick} />);

    screen.getByRole('button', { name: 'Add Todo' }).click();
    expect(onAddClick).toHaveBeenCalled();
  });
});
