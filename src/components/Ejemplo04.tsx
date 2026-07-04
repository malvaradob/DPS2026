/*
Crear una aplicación que calcule el IVA de un 
producto utilizando Arrow Functions y analizar el Hoisting.
*/

function Ejemplo04() {
  const precio = 100;

  const calcularIVA = (valor: number): number => {
    const iva = valor * 0.13;
    return iva;
  };

  return (
    <>
      <h2>Producto</h2>
      <p>Precio:{precio}</p>
      <p>IVA:{calcularIVA(precio)}</p>
    </>
  );
}
export default Ejemplo04;