import React from 'react';
import Button from '../common/Button';

const Buttons = ({ todo, onStatusChange, onEdit, onDelete }) => (
  <div className="d-flex gap-2">
    <Button
      variant={todo.completed ? 'warning' : 'success'}
      onClick={() => onStatusChange(todo.id)}
    >
      {todo.completed ? 'Reopen' : 'Complete'}
    </Button>
    <Button variant="primary" onClick={() => onEdit(todo)}>
      Edit
    </Button>
    <Button variant="danger" onClick={() => onDelete(todo.id)}>
      Delete
    </Button>
  </div>
);

export default Buttons;
