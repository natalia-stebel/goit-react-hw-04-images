import React from 'react';
import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={css.Button} onClick={onClick}>
    Load more
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
