/*
Desarrollar un sistema que calcule el salario final de 
un empleado aplicando bonificaciones mediante funciones tipadas 
y analizar el Scope y Hoisting durante el desarrollo.
*/

type Empleado = {
  nombre: string;

  salario: number;
};

function calcularSalario(empleado: Empleado): number {
  const bono = 200;

  return empleado.salario + bono;
}

function Ejemplo06() {
  const empleado: Empleado = {
    nombre: "Roberto Carlos Palacios",
    salario: 1200,
  };

  return (
    <>
      <h1>Empleado</h1>
      <p>{empleado.nombre}</p>
      <p>Salario Base:{empleado.salario}</p>
      <p>Total:{calcularSalario(empleado)}</p>
    </>
  );
}

export default Ejemplo06;