/*
Ejercicio 1
Crear una aplicación que muestre la información de un estudiante utilizando variables tipadas de TypeScript.
La aplicación deberá mostrar:
  -> Nombre 
  -> Edad 
  -> Carrera 
  -> ¿Está activo? 
  -> Promedio 
*/
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