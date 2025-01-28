import { ListGroup } from 'react-bootstrap';
import Item from './Item';

const List = ({ todos, onStatusChange, onEdit, onDelete }) => (
  <ListGroup>
    {todos.map(todo => (
      <Item
        key={todo.id}
        todo={todo}
        onStatusChange={onStatusChange}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </ListGroup>
);

export default List;