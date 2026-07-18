import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header
        title="Bienvenido a la biblioteca virtual"
        subtitle="Esta es una biblioteca de la UDB"
      />

      <Header title="Historia" />

      <Header title="Informatica" subtitle="Libros de informatica" />

      <Footer developer="Alexander Bernal" version="1.0" />
    </>
  );
}

export default App;
