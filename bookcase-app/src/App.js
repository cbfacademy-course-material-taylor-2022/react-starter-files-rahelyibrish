import React, { useState } from "react";
import Book from "./components/Book";
import Search from "./components/Search";
import data from "./models/books.json";

function App() {
  const [books, setBooks] = useState(data);

  async function findBooks(value) {
    console.log("search value:", value);
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;
    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  return (
    <>
      <Search findBooks={findBooks} />
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
}

export default App;
