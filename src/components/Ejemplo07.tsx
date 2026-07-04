/*
Una empresa desea mostrar la información de sus empleados.
Cada empleado posee:
    -> Nombre 
    -> Cargo 
    -> Salario 
    -> Departamento (opcional) 
Si no se envía el departamento, deberá mostrarse "No asignado".
Además, si el bono no se especifica, el sistema agregará automáticamente un bono de $100.
*/
function Ejemplo07() {
  type Empleados = {
    nombre: string;
    cargo: string;
    salario: number;
    departamento?: string;
  };

  const calcularSalario2 = (salario: number, bono: number = 100): number =>
    salario + bono;

  const empleado2: Empleados = {
    nombre: "Ana Rodriguez",
    cargo: "Desarrolladora Frontend",
    salario: 1200,
  };

  const { nombre, cargo, salario, departamento = "No asignado" } = empleado2;

  return (
    <>
      <h1>Empleado</h1>
      <p>Nombre: {nombre}</p>
      <p>Cargo: {cargo}</p>
      <p>Departamento: {departamento}</p>
      <p>Salario Base: ${salario}</p>
      <p>Salario Final: ${calcularSalario2(salario)}</p>
    </>
  );
}

export default Ejemplo07;