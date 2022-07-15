import React, { Component } from 'react';


class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  changeInput = evt => {
    this.setState({ searchQuery: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
        
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.changeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;