import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  // Make sure that the correct props are being passed in
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };

  /*
  * @description: This function gets called when a shelf have been selected from the drop down list
  * It passes back the book and the selected shelf to the main method in App.js
  */
  handleSelectChange = (event) => {
    if(event.target.value === this.props.book.shelf) return;    
    if(this.props.changeShelf) this.props.changeShelf(this.props.book, event.target.value);    
  };

  render() {
    const book = this.props.book;
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={this.handleSelectChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;