import type { BookType } from "../types";
import styles from "./Book.module.css";

type BookProps = {
  book: BookType;
  onBookDeleted: () => void;
};

const Book = ({ book, onBookDeleted }: BookProps) => {
  const handleDelete = () => {
    fetch(`http://localhost:3000/api/books/${book.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        onBookDeleted();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={styles.book}>
      <strong>{book.title}</strong>
      <br></br>
      <em>{book.author}</em>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Book;
