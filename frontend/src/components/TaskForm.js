import Alert from './Alert'; // Import your Alert component

const TaskForm = () => {
  // ... existing code ...

  return (
    <form onSubmit={handleSubmit}>
      <Alert message={alert?.message} type={alert?.type} /> {/* Display alert */}
      {/* ... form fields ... */}
      <button type="submit">Create Task</button>
    </form>
  );
};