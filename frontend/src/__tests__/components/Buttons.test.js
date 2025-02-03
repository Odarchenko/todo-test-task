import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '../../components/Buttons';
import '../test-utils';

describe('Buttons Component', () => {
  const todo = {
    id: 1,
    title: 'Test Todo',
    completed: false,
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <Buttons
        todo={todo}
        onStatusChange={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(getByText('Completed')).toBeInTheDocument();
    expect(getByText('⋮')).toBeInTheDocument();
  });

  it('calls onStatusChange when status button is clicked', () => {
    const mockOnStatusChange = jest.fn();
    const { getByText } = render(
      <Buttons
        todo={todo}
        onStatusChange={mockOnStatusChange}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    fireEvent.click(getByText('Completed'));
    expect(mockOnStatusChange).toHaveBeenCalledWith(todo.id);
  });

  it('calls onEdit when edit is clicked', () => {
    const mockOnEdit = jest.fn();
    const { getByText } = render(
      <Buttons
        todo={todo}
        onStatusChange={() => {}}
        onEdit={mockOnEdit}
        onDelete={() => {}}
      />
    );

    fireEvent.click(getByText('⋮'));
    fireEvent.click(getByText('Edit'));
    expect(mockOnEdit).toHaveBeenCalledWith(todo);
  });

  it('calls onDelete when delete is clicked', () => {
    const mockOnDelete = jest.fn();
    const { getByText } = render(
      <Buttons
        todo={todo}
        onStatusChange={() => {}}
        onEdit={() => {}}
        onDelete={mockOnDelete}
      />
    );

    fireEvent.click(getByText('⋮'));
    fireEvent.click(getByText('Delete'));
    expect(mockOnDelete).toHaveBeenCalledWith(todo.id);
  });
});
