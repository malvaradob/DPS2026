import React from "react";

// Definicion de una interface

interface ProductProps {
  nombre: string;
  precio: number;
  categoria: string;
  imagen: string;
  disponible: boolean;
  descuento?: number;
  children?: React.ReactNode;
}

// Representacion del estado del producto
type EstadoProducto = "Disponible" | "Agotado";

function ProductCard({
  nombre,
  precio,
  categoria,
  imagen,
  disponible,
  descuento = 0,
  children,
}: ProductProps) {
  // Utilizacion de Type
  const estado: EstadoProducto = disponible ? "Disponible" : "Agotado";

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        width: "260px",
        borderRadius: "10px",
      }}
    >
      {
        // Utilizando props -> propiedades de los componentes
      }
      <img src={imagen} alt={nombre} width="220" />

      <h2>{nombre}</h2>

      <p>
        <strong>Categoria: </strong> {categoria}
      </p>
      <p>
        <strong>Precio: </strong> {precio}
      </p>
      <p>
        <strong>Descuento: </strong> {descuento}%
      </p>
      <p>
        <strong>Estado: </strong>
        <span
          style={{
            color: disponible ? "green" : "red",
          }}
        >
          {" "}
          {estado}
        </span>
      </p>

      {
        // Renderizando nodo hijo
      }
      {children}
    </div>
  );
}

export default ProductCard;
