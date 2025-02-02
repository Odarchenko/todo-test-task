import React from 'react';
import { render, screen } from '@testing-library/react';
import Tabs from '../../components/Tabs';

describe('Tabs Component', () => {
  const todos = [
    { id: 1, title: 'Todo 1', description: 'Description 1', completed: false },
    { id: 2, title: 'Todo 2', description: 'Description 2', completed: true },
  ];
  const onStatusChange = jest.fn();
  const onEdit = jest.fn();
  const onDelete = jest.fn();

  test('renders tabs with correct titles', () => {
    render(
      <Tabs
        todos={todos}
        onStatusChange={onStatusChange}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );

    expect(screen.getByText(/All \(2\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Pending \(1\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Completed \(1\)/i)).toBeInTheDocument();
  });
});
