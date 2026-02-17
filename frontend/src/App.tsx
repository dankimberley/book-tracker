import './App.css'
import { useEffect, useState } from 'react'

type Book = {
  id: number,
  user_id: number,
  title: string,
  author: string,
  date_finished: string,
  completed: number,
  created_at: string
}

function App() {

  const [message, setMessage] = useState<string>('')
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => setMessage(data.message))
    .catch(error => console.error('Error:', error))
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
    .then(response => response.json())
    .then(data => setBooks(data))
    .catch(error => console.error('Error:', error))
  })

  return (
    <>
      <div>
        Book Tracker
        {message}
        {books.map(book => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
