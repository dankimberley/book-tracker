import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => setMessage(data.message))
    .catch(error => console.error('Error:', error))
  })

  return (
    <>
      <div>
        Book Tracker
        {message}
      </div>
    </>
  )
}

export default App
