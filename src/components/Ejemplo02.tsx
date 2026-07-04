/*
Crear una aplicación que muestre el salario de un empleado y demostrar 
cómo funcionan los scopes de TypeScript dentro de funciones.
*/

function Ejemplo02() {
  const nombre = "Juan Perez";

  let salario = 800;

  function aumentarSalario() {
    let aumento = 150;
    return salario + aumento;
  }

  return (
    <>
      <h1>Empleado</h1>
      <p>{nombre}</p>
      <p>Salario: ${salario}</p>
      <p>Nuevo salario: ${aumentarSalario()}</p>
    </>
  );
}

export default Ejemplo02;
