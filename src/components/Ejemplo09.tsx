/*
Una tienda necesita registrar productos.
Cada producto puede tener:
    -> Nombre 
    -> Precio 
    -> Categoría (opcional) 

El sistema deberá:
    -> Agregar descuentos 
    -> Registrar etiquetas adicionales mediante Rest 
    -> Utilizar callbacks 
    -> Utilizar funciones anónimas 
    -> Mostrar el resultado en React
*/

type Producto3 = {
  nombre: string;
  precio: number;
  categoria?: string;
};

const registrarProducto = (
  producto: Producto3,
  descuento: number = 0,
  callback: (mensaje: string) => void,
  ...etiquetas: string[]
): void => {
  const { nombre, precio, categoria = "General" } = producto;

  const precioFinal = precio - descuento;

  callback(
    `${nombre}
         | ${categoria}
         | $${precioFinal}
         | ${etiquetas.join(", ")}`,
  );
};

function Ejemplo09() {
  let mensaje = "";

  registrarProducto(
    {
      nombre: "Laptop",
      precio: 1500,
    },

    100,

    (texto) => {
      mensaje = texto;
    },
    "Electrónica",
    "Oferta",
    "Nuevo",
  );

  return (
    <>
      <h1>Productos</h1>
      <p>{mensaje}</p>
    </>
  );
}

export default Ejemplo09;