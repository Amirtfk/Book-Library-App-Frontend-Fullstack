import React, {useEffect, useState} from 'react';
import BookLibrary from "./components/BookLibrary";
import './App.css';
import {Book} from "../book";
import axios from "axios";
import AddBook from "./components/AddBook";

function App() {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect ( () => {

        getBooks()

    } , [] )

    const getBooks = () => {
        axios.get("/api/book")
            .then((response) => response.data)
            .then((books) => setBooks(books))
    }

    const onAddBook = (sth: string) => {
        let newBook = {
            title : sth,
            isbn : 12567950
        }

        axios.post("/api/book", newBook)
            .then(getBooks)
    }


    const deleteBook = (isbn: string) => {

        axios.delete("/api/book/" + isbn).then(getBooks)

    }



  return (
    <div className="App">
      <header className="App-header">

          <h1>Book Library</h1>
          <AddBook onAddBook={onAddBook}/>
          <BookLibrary books={books} deleteBook={deleteBook}/>

      </header>
    </div>
  );
}

export default App;
