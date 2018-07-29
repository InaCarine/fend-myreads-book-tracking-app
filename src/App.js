import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import sortBy from 'sort-by';
import * as BooksAPI from './utils/BooksAPI';

// App styles
import './App.css';

// App Components
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends Component {
  state = {
    books: [],
  };

  // Function that gets called after the app have loaded
  // In this case it will get all the books from the backend API and update its state
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      books.sort(sortBy('title'))
      this.setState({ books });
    }).catch(error => console.log('An error happened while getting the books', error));
  };

  /*
  * @description: Moves the book to its new shelf
  * This function gets passed on as a prop to ListBooks > Bookshelf > Book.
  * @params: {object} book, {string} shelf
  */
  updateShelf = (book, shelf) => {
    // Update the books shelf in the backend
    BooksAPI.update(book, shelf).then(() => {

      // Then update the state of the app to reflect the change
      book.shelf = shelf;

      let newbooks = this.state.books.filter(currentBook => currentBook.id !== book.id );

      this.setState({ books: newbooks.concat([book]) });
    }).catch(error => console.log('An error happened while trying to move the book: ', error));
  };

render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} changeShelf={this.updateShelf} />
        )} />
        <Route path="/search" render={({ history }) => (
          <SearchBooks appBooks={this.state.books} changeShelf={this.updateShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
