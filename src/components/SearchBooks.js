import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../utils/BooksAPI';

import Book from './Book';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  state = {
    query: '',
    results: [],
    isSearching: false,
  };

  // Gets called when the input is being updated
  updateQuery = (event) => {
    const query = event.target.value; 

    // Update the state with the query and then call the book API.
    this.setState({ query: query, isSearching: true });
    this.getResults(query);
  }

  getResults = (query) => {

    if (query === '') {
      this.setState({ results: [], query: '' })
    } else {
      // Search the API with the query
      BooksAPI.search(query).then(books => {
        // IF results found, update the state with the response
        // else set the result to empty
        if (!books.error) {
          this.setState({ results: books });
        } else {
          this.setState({ results: [] });
        }
        this.setState({ isSearching: false });
      });
    }
  };

  render() {
    const { query, results } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={this.updateQuery}
            />

          </div>
        </div>
        <div className="search-books-results">
          {
            (query && results.length === 0 && !this.state.isSearching) && (
              <p>No books found</p>
            )
          }
          {
            (query && results.length > 0 && !this.state.isSearching) && (
              <ol className="books-grid">
                {results.map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      changeShelf={this.props.changeShelf}
                    />
                  </li>
                ))}
              </ol>
            )
          }
          
        </div>
      </div>
    );
  }
}

export default SearchBooks;