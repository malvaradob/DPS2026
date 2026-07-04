/**
 Crear un componente que muestre la información
de varios productos utilizando un tipo personalizado.
 */

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
};

const productos: Producto[] = [
  { id: 1, nombre: "Mouse", precio: 20, disponible: true },
  { id: 2, nombre: "Teclado", precio: 40, disponible: false },
];

function obtenerDisponibles(lista: Producto[]): Producto[] {
  return lista.filter((p) => p.disponible);
}

function Ejemplo05() {
  return (
    <>
      <h1>Productos</h1>

      {obtenerDisponibles(productos).map((producto) => (
        <div key={producto.id}>
          {producto.nombre}${producto.precio}
        </div>
      ))}
    </>
  );
}

export default Ejemplo05;
