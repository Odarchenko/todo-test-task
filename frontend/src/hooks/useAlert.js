import { useState, useEffect } from 'react';

export const useAlert = (timeout = 3000) => {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [alert, timeout]);

  const showAlert = (message, type = 'success') => {
    setAlert({ message, type });
  };

  return { alert, setAlert, showAlert };
};