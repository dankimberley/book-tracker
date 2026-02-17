import type { BookType } from '../types'
import Book from './Book'
import styles from './Bookcase.module.css'

type BookcaseProps = {
    books: BookType[]
    onBookDeleted: () => void
}

const Bookcase = ({ books, onBookDeleted }: BookcaseProps) => {
    return (
        <div className={styles.bookcase}>
            {books.map((book) => <Book key={book.id} book={book} onBookDeleted={onBookDeleted}/>)}
        </div>
    )
}

export default Bookcase