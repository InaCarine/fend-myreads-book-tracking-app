import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  // npm install --save prop-types
  // To make sure the props given is of the type wanted and if they are required
  static propTypes = {
    books: PropTypes.array.isRequired,
  };  

  render() {
    const books = this.props.books;
    console.log(books);
    
    // eslint-disable-next-line
    let { currentlyReading, wantToRead, read } = [];

    currentlyReading = books.filter(contact => contact.shelf === 'currentlyReading');
    wantToRead = books.filter(contact => contact.shelf === 'wantToRead');
    read = books.filter(contact => contact.shelf === 'read');

    //TODO: Add sort by name
      // + Add more select bys

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <Bookshelf name="Currently Reading" books={currentlyReading} />
            <Bookshelf name="Want to Read" books={wantToRead} />
            <Bookshelf name="Read" books={read} />
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