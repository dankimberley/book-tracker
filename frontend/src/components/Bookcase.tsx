import type { BookType } from '../types'
import Book from './Book'

type BookcaseProps = {
    books: BookType[]
}

const Bookcase = ({ books }: BookcaseProps) => {
    return (
        <div>
            {books.map((book) => <Book key={book.id} book={book}/>)}
        </div>
    )
}

export default Bookcase