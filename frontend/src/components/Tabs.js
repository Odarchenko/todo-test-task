import React from 'react';
import { Tabs as BootstrapTabs } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Tab from '../common/Tab';
import List from './List';

const Tabs = ({ todos, onStatusChange, onEdit, onDelete }) => {
  const { t } = useTranslation();

  return (
    <BootstrapTabs defaultActiveKey="all" className="mb-3">
      <Tab eventKey="all" title={t('allCount', { count: todos.length })}>
        <List
          todos={todos}
          onStatusChange={onStatusChange}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Tab>
      <Tab
        eventKey="pending"
        title={t('pendingCount', {
          count: todos.filter((t) => !t.completed).length,
        })}
      >
        <List
          todos={todos.filter((todo) => !todo.completed)}
          onStatusChange={onStatusChange}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Tab>
      <Tab
        eventKey="completed"
        title={t('completedCount', {
          count: todos.filter((t) => t.completed).length,
        })}
      >
        <List
          todos={todos.filter((todo) => todo.completed)}
          onStatusChange={onStatusChange}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </Tab>
    </BootstrapTabs>
  );
};

export default Tabs;
