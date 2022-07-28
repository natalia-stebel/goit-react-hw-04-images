import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './searchbar.module.css';
import { toast } from 'react-toastify';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setsearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Empty:(  Enter request for searching', {
        position: 'top-center',
      });
      return;
    }

    onSubmit(searchQuery);
    setsearchQuery('');
  };

  const handleChange = event =>
    setsearchQuery(event.currentTarget.value.toLowerCase());

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          {/* <span className={css.SearchFormButtonLabel}></span> */}
        </button>
        <input
          className={css.SearchForminput}
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
