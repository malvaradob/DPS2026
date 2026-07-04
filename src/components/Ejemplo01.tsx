// Ejemplo 1
function Ejemplo01() {
  const nombre: string = "Ana Alas";
  const edad: number = 19;
  const carrera: string = "Ingenieria en Ciencias de la Computacion";
  const activo: boolean = false;
  const promedio: number = 10;

  return (
    <>
      <h1>Datos del estudiante</h1>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Carrera: {carrera}</p>
      <p>Activo: {activo ? "Si" : "No"}</p>
      <p>Promedio: {promedio}</p>
    </>
  );
}

export default Ejemplo01;