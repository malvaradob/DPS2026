import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import BookList from "./components/BookList";
import {books} from "./data/books";
import { type Book } from "./types/Book";

function App() {
  // Cual es el libro seleccionado
  const[selectedBook, setSelectedBook] = useState<Book|null>(null);

  function selectBook(book:Book){
      setSelectedBook(book);
  }


  // Uso del useState
  const [favoriteCount, setFavoriteCount] = useState<number>(0);

  // funcion de incremento
  function addFavorite() {
    setFavoriteCount(favoriteCount + 1);
  }

  function removeFavorite() {
    if (favoriteCount > 0) {
      setFavoriteCount(favoriteCount - 1);
    }
  }

  function resetFavoriteCount(){
    setFavoriteCount(0);
  }

  return (
    <>
      <Header
        title="Bienvenido a la biblioteca virtual"
        subtitle="Esta es una biblioteca de la UDB"
      />

      <hr />
      <h2>Libros favoritos: {favoriteCount}</h2>
      <button onClick={addFavorite}>Agregar a favorito</button>
      <button onClick={removeFavorite}>Quitar de favorito</button>
      <button onClick={resetFavoriteCount}>Limpiar favorito</button>

      <hr />

      <BookList books={books} onSelectBook={selectBook} />

      <hr />
      <h2>Libro seleccionado</h2>
      {selectedBook ? (
        <>
          <h3>{selectedBook.title}</h3>
          <p>{selectedBook.author}</p>
        </>
      ) : (
        <p>Ningun libro seleccionado</p>
      )}

      <Footer developer="Alexander Bernal" version="1.0" />
    </>
  );
}

export default App;
