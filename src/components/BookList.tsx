import { type Book } from "../types/Book";
import BookCard from "./BookCard";

// Generar nuestra interaces de propiedades
interface BookListProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
}

function BookList({ books,onSelectBook }: BookListProps) {
  if (books.length === 0) {
    return <p>No existen libros registrados</p>;
  }

  return (
    <section>
      {books.map((book) => (
        <BookCard 
        key={book.id} 
        book={book} 
        onSelectBook={onSelectBook}
        />
      ))}
    </section>
  );
}

export default BookList;
