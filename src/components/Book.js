import React from 'react';
import PropTypes from 'prop-types';


const Book = ({book, changeShelf}) => {
  /*
  * @description: This function gets called when a shelf have been selected from the drop down list
  * It passes back the book and the selected shelf to the main method in App.js
  */
  const handleSelectChange = event => {
    if (event.target.value === book.shelf) return;
    if (changeShelf) changeShelf(book, event.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf || 'none'} onChange={handleSelectChange}>
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
};

// Make sure that the correct props are being passed in
Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Book;