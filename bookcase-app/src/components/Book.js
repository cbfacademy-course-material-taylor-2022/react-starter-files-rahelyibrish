import React from "react";

function Book(props) {
  return (
    <div>
      <h2>{props.book.volumeInfo.title}</h2>
      <p>{props.book.volumeInfo.authors}</p>
      <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="title"></img>
      {props.book.saleInfo.retailPrice && (
        <p>{props.book.saleInfo.retailPrice.amount}</p>
      )}
      <p>{props.book.volumeInfo.description}</p>
    </div>
  );
}

export default Book;
