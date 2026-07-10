import ProductCard from "./ProductCard";
import Card from "./Card";
import GenericList from "./GenericList";

function Main() {
  const categorias = ["Monitores", "Teclados", "Impresoras", "Mouse"];

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>Catalog de Productos</h1>

      {/*
            Implementacion de componente reutilizable
            */}

      <Card titulo="Productos disponibles">
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {
            // Llamnado a otro componente
          }
          <ProductCard
            nombre="Mouse"
            precio={25}
            categoria="Mouse"
            imagen="https://picsum.photos/200"
            descuento={10}
            disponible={true}
          >
            <button>Comprar</button>
          </ProductCard>

          <ProductCard
            nombre="Monitor"
            precio={125}
            categoria="Monitor"
            imagen="https://picsum.photos/200"
            descuento={5}
            disponible={false}
          >
            <button>Ver detalle</button>
          </ProductCard>
        </div>
      </Card>

      <Card titulo="Categorias">
        <GenericList
          items={categorias}
          renderItem={(categoria) => <strong>{categoria}</strong>}
        />
      </Card>
    </div>
  );
}

export default Main;
