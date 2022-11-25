import React from "react";
import PropTypes from "prop-types";

function Book({
  book: {
    id,
    saleInfo: { retailPrice },
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
  },
}) {
  return (
    <div className="book">
      <img src={thumbnail} alt={title} />
      <div>
        <h2 title={title}>{title}</h2>

        {retailPrice && (
          <p>
            <button onClick={() => addBook(title)}>"Add +"</button> £
            {retailPrice.amount}
          </p>
        )}
        {authors && <p>{authors.join(", ")}</p>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function addBook(title) {
  console.log(`The Book'${title}' was clicked`);
}

export default Book;
