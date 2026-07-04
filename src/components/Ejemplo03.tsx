/*
Crear una calculadora sencilla que permita sumar dos números mediante una función tipada.
*/

function sumar(a: number, b: number): number {
  return a + b;
}

function Ejemplo03() {
  const resultado = sumar(15, 20);

  return (
    <>
      <h1>Calculadora</h1>
      <p>Resultado:{resultado}</p>
    </>
  );
}
export default Ejemplo03;
