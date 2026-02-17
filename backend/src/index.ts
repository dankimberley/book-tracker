import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/api/books", async (req, res) => {
  const [books] = await pool.query("SELECT * FROM books");
  res.json(books);
});

app.post("/api/books", async (req, res) => {
try {
    const { title, author, date_finished, completed } = req.body;
    await pool.query(
        "INSERT INTO books (user_id, title, author, date_finished, completed) VALUES (?,?,?,?,?)",
        [1, title, author, date_finished, completed],
    );
    res.json({ success: true });
} catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to add book" });
}
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
