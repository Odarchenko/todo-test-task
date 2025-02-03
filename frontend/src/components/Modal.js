import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal as BootstrapModal, Form, Button } from 'react-bootstrap';

const Modal = ({ show, todo, formData, onClose, onSubmit, onChange }) => {
  const { t } = useTranslation();

  return (
    <BootstrapModal show={show} onHide={onClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>
          {todo ? t('editTodo') : t('addNewTodo')}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>{t('title')}</Form.Label>
            <Form.Control
              type="text"
              value={formData.title}
              onChange={(e) => onChange({ ...formData, title: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{t('description')}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.description}
              onChange={(e) =>
                onChange({ ...formData, description: e.target.value })
              }
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={onClose}>
              {t('cancel')}
            </Button>
            <Button variant="primary" type="submit">
              {todo ? t('saveChanges') : t('addTodo')}
            </Button>
          </div>
        </Form>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default Modal;
