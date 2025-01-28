import { Tabs as BootstrapTabs } from 'react-bootstrap';
import Tab from '../common/Tab';
import List from './List';

const Tabs = ({ todos, onStatusChange, onEdit, onDelete }) => (
  <BootstrapTabs defaultActiveKey="all" className="mb-3">
    <Tab eventKey="all" title={`All (${todos.length})`}>
      <List
        todos={todos}
        onStatusChange={onStatusChange}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Tab>
    <Tab
      eventKey="pending"
      title={`Pending (${todos.filter(t => !t.completed).length})`}
    >
      <List
        todos={todos.filter(todo => !todo.completed)}
        onStatusChange={onStatusChange}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Tab>
    <Tab
      eventKey="finished"
      title={`Finished (${todos.filter(t => t.completed).length})`}
    >
      <List
        todos={todos.filter(todo => todo.completed)}
        onStatusChange={onStatusChange}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Tab>
  </BootstrapTabs>
);

export default  Tabs;