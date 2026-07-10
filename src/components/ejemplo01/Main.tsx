import StoreInfo from "./StoreInfo";
import ProductCard from "./ProductCard";


function Main(){

    return (
      <div
        style={{
          padding: "30px",
          fontFamily: "Arial",
        }}
      >
        <h1>Catalogo de Productos</h1>
        <StoreInfo />

        <h2>Productos</h2>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/*
                Lo que se va a implementar a continucacion es reutilizacion de componentes
                */}

          <ProductCard />

          <ProductCard />

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    );

}

export default Main;