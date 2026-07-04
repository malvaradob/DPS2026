/*
Una universidad necesita calcular el promedio de un estudiante. 
Las calificaciones pueden variar, por lo que la función debe aceptar cualquier cantidad de notas. Posteriormente se utilizará un callback para mostrar el resultado.
*/

const calcularPromedio = (
  callback: (promedio: number) => void,
  ...notas: number[]
): void => {
  const suma = notas.reduce(
    (total, nota) => total + nota,

    0,
  );

  const promedio = suma / notas.length;

  callback(promedio);
};

function Ejemplo08() {
  let promedio = 0;

  calcularPromedio(
    (resultado) => {
      promedio = resultado;
    },
    90,
    80,
    100,
    70,
    85,
  );

  return (
    <>
      <h1>Promedio</h1>
      <h2>{promedio.toFixed(2)}</h2>
    </>
  );
}

export default Ejemplo08;