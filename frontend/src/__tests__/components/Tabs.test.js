import React from 'react';
import { render, screen } from '@testing-library/react';
import Tabs from '../../components/Tabs';
import '../test-utils';

describe('Tabs Component', () => {
  const todos = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Description 2',
      completed: true,
    },
  ];

  it('renders tabs with correct titles', () => {
    render(
      <Tabs
        todos={todos}
        onStatusChange={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByText('All (2)')).toBeInTheDocument();
    expect(screen.getByText('Pending (1)')).toBeInTheDocument();
    expect(screen.getByText('Completed (1)')).toBeInTheDocument();
  });
});
