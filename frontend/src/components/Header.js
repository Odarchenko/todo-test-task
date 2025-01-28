import Button from '../common/Button';

export const Header = ({ onAddClick }) => (
  <div className="d-flex justify-content-between align-items-center mb-4">
    <h2>Todo List</h2>
    <Button variant="primary" onClick={onAddClick}>
      Add Todo
    </Button>
  </div>
);