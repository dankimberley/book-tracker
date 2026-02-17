import { useState } from "react";
import styles from "./BookForm.module.css";

type BookFormProps = {
  onBookAdded: () => void;
};

const BookForm = ({ onBookAdded }: BookFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [dateFinished, setDateFinished] = useState<string>("");

  const handleSubmit = () => {
    fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, completed, dateFinished }),
    })
      .then((response) => response.json())
      .then(() => {
        onBookAdded();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={styles.BookForm}>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Author</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>Finished?</label>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
      {completed && (
        <input
          type="date"
          value={dateFinished}
          onChange={(e) => setDateFinished(e.target.value)}
        />
      )}
      <button type="button" onClick={handleSubmit}>
        Add Book
      </button>
    </div>
  );
};

export default BookForm;
