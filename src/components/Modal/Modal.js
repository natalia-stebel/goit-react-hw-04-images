import { useEffect } from 'react';
import css from './modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ largeImage, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleBackdropClick);
    return () => {
      window.removeEventListener('keydown', handleBackdropClick);
    };
  });

  const handleBackdropClick = evt => {
    if (evt.key === 'Escape' || evt.target === evt.currentTarget) {
      closeModal({ status: false });
    }
  };

  return (
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
