import type { BookType } from '../types'
import Book from './Book'
import styles from './Bookcase.module.css'

type BookcaseProps = {
    books: BookType[]
}

const Bookcase = ({ books }: BookcaseProps) => {
    return (
        <div className={styles.bookcase}>
            {books.map((book) => <Book key={book.id} book={book}/>)}
        </div>
    )
}

export default Bookcase