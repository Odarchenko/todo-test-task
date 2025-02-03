import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../common/Button';

export const Header = ({ onAddClick }) => {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>{t('todoList')}</h2>
      <Button
        variant="outline-primary"
        onClick={onAddClick}
        className="d-flex align-items-center"
      >
        {t('addTodo')}
      </Button>
    </div>
  );
};
