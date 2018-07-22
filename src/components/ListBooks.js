import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  // npm install --save prop-types
  // To make sure the props given is of the type wanted and if they are required
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };  

  render() {
    const books = this.props.books;
    
    let { currentlyReading, wantToRead, read } = [];

    // Sort all the books into the shelf they belong to
    currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    wantToRead = books.filter(book => book.shelf === 'wantToRead');
    read = books.filter(book => book.shelf === 'read');

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <Bookshelf name="Currently Reading" books={currentlyReading} changeShelf={this.props.changeShelf} />
            <Bookshelf name="Want to Read" books={wantToRead} changeShelf={this.props.changeShelf} />
            <Bookshelf name="Read" books={read} changeShelf={this.props.changeShelf} />
          </div>
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;