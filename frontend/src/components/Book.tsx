import type { BookType } from '../types'

type BookProps = {
    book: BookType
}

const Book = ({book}: BookProps) => {
    return (
        <div>
            {book.title}
            {book.author}
        </div>
    )
}

export default Book