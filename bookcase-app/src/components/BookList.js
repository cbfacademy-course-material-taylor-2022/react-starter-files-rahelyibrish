import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function BookList(props) {
  return props.books.map((book) => <Book key={book.id} book={book} />);
}

export default BookList;
