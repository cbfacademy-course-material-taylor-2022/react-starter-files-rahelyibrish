import React from "react";

function Book(props) {
  return (
    <div>
      <h2>{props.book.volumeInfo.title}</h2>
      <p>{props.book.volumeInfo.authors}</p>
      <img
        src={props.book.volumeInfo.imageLinks.thumbnail}
        alt={props.book.volumeInfo.title}
      />
      {props.book.saleInfo.retailPrice && (
        <p>{props.book.saleInfo.retailPrice.amount}</p>
      )}
      <p>{props.book.volumeInfo.description}</p>
      <button onClick={() => props.addBook(props.book.volumeInfo.title)}>
        Add +
      </button>
    </div>
  );
}

export default Book;
