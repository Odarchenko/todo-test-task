import React from 'react';
import { render, screen } from '@testing-library/react';
import Buttons from '../../components/Buttons';

describe('Buttons Component', () => {
  const todo = { id: 1, title: 'Test Todo', completed: false };
  const onStatusChange = jest.fn();
  const onEdit = jest.fn();
  const onDelete = jest.fn();

  test('renders buttons with correct text', () => {
    render(
      <Buttons
        todo={todo}
        onStatusChange={onStatusChange}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    expect(screen.getByText(/Complete/i)).toBeInTheDocument();
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    expect(screen.getByText(/Delete/i)).toBeInTheDocument();
  });

  test('calls onStatusChange when Complete button is clicked', () => {
    render(
      <Buttons
        todo={todo}
        onStatusChange={onStatusChange}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    screen.getByText(/Complete/i).click();
    expect(onStatusChange).toHaveBeenCalledWith(todo.id);
  });
});
