import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Buttons from '../components/Buttons';

const Item = ({ todo, onStatusChange, onEdit, onDelete }) => (
  <ListGroup.Item
    className="d-flex justify-content-between align-items-start"
    variant={todo.completed ? 'success' : 'light'}
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">{todo.title}</div>
      {todo.description}
    </div>
    <Buttons
      todo={todo}
      onStatusChange={onStatusChange}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  </ListGroup.Item>
);

export default Item;
