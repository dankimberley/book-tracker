import './App.css'
import { useEffect, useState } from 'react'
import type { BookType } from './types'
import Bookcase from './components/Bookcase'

function App() {
  const [books, setBooks] = useState<BookType[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
    .then(response => response.json())
    .then(data => setBooks(data))
    .catch(error => console.error('Error:', error))
  }, [])

  return (
    <>
      <div>
        <h1>Book Tracker</h1>
        <Bookcase books={books} />
      </div>
    </>
  )
}

export default App
