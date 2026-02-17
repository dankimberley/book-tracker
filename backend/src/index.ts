import express from 'express'
import cors from 'cors'
import pool from './db.js'

const app = express()
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'Hello'})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});