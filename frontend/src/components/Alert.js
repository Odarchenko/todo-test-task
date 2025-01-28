import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <BootstrapAlert
      variant={type}
      onClose={onClose}
      dismissible
      className="mb-4"
    >
      {message}
    </BootstrapAlert>
  );
};

export default Alert;