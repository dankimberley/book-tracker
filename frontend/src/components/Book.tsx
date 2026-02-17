import type { BookType } from '../types'
import styles from './Book.module.css'

type BookProps = {
    book: BookType
}

const Book = ({book}: BookProps) => {
    return (
        <div className={styles.book}>
            <strong>{book.title}</strong><br></br>
            <em>{book.author}</em>
        </div>
    )
}

export default Book