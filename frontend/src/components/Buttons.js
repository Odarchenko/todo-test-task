import React from 'react';
import Button from '../common/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const Buttons = ({ todo, onStatusChange, onEdit, onDelete }) => {
  return (
    <div className="d-flex gap-2">
      <Button
        variant={todo.completed ? 'warning' : 'success'}
        onClick={() => onStatusChange(todo.id)}
      >
        {todo.completed ? 'Pending' : 'Completed'}
      </Button>
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          className="dots-toggle"
        >
          ⋮
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onEdit(todo)}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => onDelete(todo.id)}>
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Buttons;
