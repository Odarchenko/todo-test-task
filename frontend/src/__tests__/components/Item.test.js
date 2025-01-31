import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '../../components/Item';

describe('Item Component', () => {
  const todo = {
    id: 1,
    title: 'Test Todo',
    description: 'Test Description',
    completed: false,
  };
  const onStatusChange = jest.fn();
  const onEdit = jest.fn();
  const onDelete = jest.fn();

  test('renders todo item with title and description', () => {
    render(
      <Item
        todo={todo}
        onStatusChange={onStatusChange}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
  });
});
