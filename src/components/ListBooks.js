import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Bookshelf from './Bookshelf';

const ListBooks = ({books, changeShelf}) => {

  // Sort all the books into the shelf they belong to
  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
  const wantToRead = books.filter(book => book.shelf === 'wantToRead');
  const read = books.filter(book => book.shelf === 'read');

  return (
    <div className="list-books">

      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <Bookshelf name="Currently Reading" books={currentlyReading} changeShelf={changeShelf} />
          <Bookshelf name="Want to Read" books={wantToRead} changeShelf={changeShelf} />
          <Bookshelf name="Read" books={read} changeShelf={changeShelf} />
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

// npm install --save prop-types
// To make sure the props given is of the type wanted and if they are required
ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};  

export default ListBooks;