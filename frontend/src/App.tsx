import "./App.css";
import { useEffect, useState } from "react";
import type { BookType } from "./types";
import Bookcase from "./components/Bookcase";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState<BookType[]>([]);

  const fetchBooks = () => {
    fetch("http://localhost:3000/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => fetchBooks(), []);

  return (
    <>
      <div>
        <h1>Book Tracker</h1>
        <BookForm onBookAdded={fetchBooks} />
        <Bookcase books={books} onBookDeleted={fetchBooks}/>
      </div>
    </>
  );
}

export default App;
