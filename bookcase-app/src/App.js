import React, { useState } from "react";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Search from "./components/Search";
import data from "./models/books.json";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Header from "./components/Header";
import About from "./Pages/About";

function addBook(title) {
  console.log(`The Book '${title}' has been clicked`);
}

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
        <Book key={book.id} book={book} addBook={addBook} />
      ))}
    </>
  );
}

function Home(props) {
  return (
    <Router>
      <Routes>
        exact path="/" element=
        {
          <>
            <Header />
            <h2>Welcome to the Book Case App</h2>
            <Search
              findBooks={props.findBooks}
              keyword={props.keyword}
              setKeyword={props.setKeyword}
            />{" "}
            <br />
            <BookList books={props.books} />
          </>
        }
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function BookCase(props) {
  return (
    <>
      <Header />
      <h2>Welcome to the Book Case App</h2>
      <BookList books={props.books} />
    </>
  );
}
export default App;
