import React from 'react';

import css from '../Button/Button.module.css';

const Button = ({ loadMoreClick }) => (
  <button type="button" className={css.Button} onClick={loadMoreClick}>
    Load more
  </button>
);

export default Button;

