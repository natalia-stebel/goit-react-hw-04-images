import React, { Component } from 'react';
// import { Formik, Form } from 'formik';
import css from './searchbar.module.css';

export class Searchbar extends Component {
  state = { q: '' };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.q);
    this.setState({ q: '' });
  };

  handleChange = event => {
    this.setState({
      q: event.currentTarget.value,
    });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            {/* <span className={css.SearchFormButtonLabel}></span> */}
          </button>
          <input
            className={css.SearchForminput}
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
