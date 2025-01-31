import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../../components/List';

describe('List Component', () => {
  const todos = [
    { id: 1, title: 'Todo 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Todo 2', description: 'Description 2', completed: true },
  ];
  const onStatusChange = jest.fn();
  const onEdit = jest.fn();
  const onDelete = jest.fn();

  test('renders list of todos', () => {
    render(
      <List
        todos={todos}
        onStatusChange={onStatusChange}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    expect(screen.getByText(/Todo 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Todo 2/i)).toBeInTheDocument();
  });
});
