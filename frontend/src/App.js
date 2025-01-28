import { Container } from 'react-bootstrap';
import Tabs from './components/Tabs';
import Modal from './components/Modal';
import Alert from './components/Alert';
import { Header } from './components/Header';
import { useAlert } from './hooks/useAlert';
import { useTodos } from './hooks/useTodos';
import { useTaskForm } from './hooks/useTaskForm';

function App() {
  const { alert, setAlert, showAlert } = useAlert();
  const { todos, setTodos, isLoading, handleDelete, handleStatusChange } = useTodos(showAlert);
  const {
    showModal,
    currentTodo,
    formData,
    handleShowModal,
    handleCloseModal,
    handleSubmit,
    setFormData
  } = useTaskForm(todos, setTodos, showAlert);

  if (isLoading) {
    return <Container className="mt-4">Loading...</Container>;
  }

  return (
    <Container className="mt-4">
      <Alert message={alert?.message} type={alert?.type} onClose={() => setAlert(null)} />
      <Header onAddClick={() => handleShowModal()} />

      <Tabs
        todos={todos}
        onStatusChange={handleStatusChange}
        onEdit={handleShowModal}
        onDelete={handleDelete}
      />

      <Modal
        show={showModal}
        todo={currentTodo}
        formData={formData}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        onChange={setFormData}
      />
    </Container>
  );
}

export default App;