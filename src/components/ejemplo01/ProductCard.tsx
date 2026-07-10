function ProductCard() {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        borderRadius: "10px",
        width: "220px",
        textAlign: "center",
        marginBottom: "15px",
      }}
    >
      <img src="https://picsum.photos/200" alt="Producto" width="180" />
      <h2>Laptop</h2>
      <p>Precio: $ 1,500</p>
      <p
        style={{
          color: "green",
          fontWeight: "bold",
        }}
      >
        Disponible
      </p>
    </div>
  );
}

// Exportacion del componente
export default ProductCard;
