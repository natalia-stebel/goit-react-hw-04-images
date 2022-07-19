import React, { Component } from 'react';
// import { Formik, Form } from 'formik';
import css from './searchbar.module.css';

export class Searchbar extends Component {
  state = { query: '' };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  handleChange = event => {
    this.setState({
      query: event.currentTarget.value,
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
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
