import React from 'react';
import Button from '../common/Button';

export const Header = ({ onAddClick }) => (
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2>Todo List</h2>
    <Button
      variant="outline-primary"
      onClick={onAddClick}
      className="d-flex align-items-center"
    >
      Add Todo
    </Button>
  </div>
);
