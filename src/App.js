import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} />
        )} />
        <Route path="/search" render={({ history }) => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp
