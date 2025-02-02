import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '../../components/Buttons';

describe('Buttons Component', () => {
  const mockOnStatusChange = jest.fn();
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  const todo = { id: 1, completed: false };

  test('renders correctly', () => {
    const { getByText } = render(
      <Buttons
        todo={todo}
        onStatusChange={mockOnStatusChange}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    expect(getByText('Completed')).toBeInTheDocument();
    expect(getByText('⋮')).toBeInTheDocument();
  });

  test('calls onStatusChange when status button is clicked', () => {
    const { getByText } = render(
      <Buttons
        todo={todo}
        onStatusChange={mockOnStatusChange}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    fireEvent.click(getByText('Completed'));
    expect(mockOnStatusChange).toHaveBeenCalledWith(todo.id);
  });

  test('calls onEdit when edit is clicked', () => {
    const { getByText } = render(
      <Buttons
        todo={todo}
        onStatusChange={mockOnStatusChange}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    fireEvent.click(getByText('⋮'));
    fireEvent.click(getByText('Edit'));
    expect(mockOnEdit).toHaveBeenCalledWith(todo);
  });

  test('calls onDelete when delete is clicked', () => {
    const { getByText } = render(
      <Buttons
        todo={todo}
        onStatusChange={mockOnStatusChange}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    fireEvent.click(getByText('⋮'));
    fireEvent.click(getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith(todo.id);
  });
});
