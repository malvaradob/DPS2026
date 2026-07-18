import { type Book } from "../types/Book";

// Crear una interfaz para nuestro componente
interface BookCardProps {
  // Objeto libro
  book: Book;
  onSelectBook?: (book: Book) => void;
}

function BookCard({ book, onSelectBook }: BookCardProps) {
  return (
    <article>
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      <p>Favorito: {book.favorite ? "Si" : "No"}</p>
      <button onClick={() => onSelectBook?.(book)}>Seleccionar</button>
      <hr />
    </article>
  );
}

export default BookCard;
