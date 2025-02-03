import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../common/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const Buttons = ({ todo, onStatusChange, onEdit, onDelete }) => {
  const { t } = useTranslation();

  return (
    <div className="d-flex gap-2">
      <Button
        variant={todo.completed ? 'warning' : 'success'}
        onClick={() => onStatusChange(todo.id)}
      >
        {todo.completed ? t('pending') : t('completed')}
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
          <Dropdown.Item onClick={() => onEdit(todo)}>
            {t('edit')}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onDelete(todo.id)}>
            {t('delete')}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Buttons;
