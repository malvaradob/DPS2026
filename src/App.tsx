
import Ejemplo01 from "./components/Ejemplo01";

function Ejemplo02(){
  const nombre: string = "Tomas Ayala";

  // Ambito global
  let salario = 800;

  function aumentarSalario(){
    // Ambito local
    let aumento = 100;

    return salario + aumento;
  }

  return (
    <>
      <h1>Empleado</h1>
      <p>{nombre}</p>
      <p>Salario: ${salario}</p>
      <p>Nuevo salario: ${aumentarSalario()}</p>

      <Ejemplo01 />
      <Ejemplo01 />
      <Ejemplo01 />
      <Ejemplo01 />
      <Ejemplo01 />
      <Ejemplo01 />
      <Ejemplo01 />
      <Ejemplo01 />
    </>
  );
}

function Ejemplo03() {
  const nombre: string = "Tomas Ayala";

  // Ambito global
  let salario = 800;

  function aumentarSalario() {
    // Ambito local
    let aumento = 100;

    return salario + aumento;
  }

  return (
    <>
      <h1>Empleado</h1>
      <p>{nombre}</p>
      <p>Salario: ${salario}</p>
      <p>Nuevo salario: ${aumentarSalario()}</p>

      <Ejemplo01 />
    </>
  );
}

function Ejemplo04() {
  const nombre: string = "Tomas Ayala";

  // Ambito global
  let salario = 800;

  function aumentarSalario() {
    // Ambito local
    let aumento = 100;

    return salario + aumento;
  }

  return (
    <>
      <h1>Empleado</h1>
      <p>{nombre}</p>
      <p>Salario: ${salario}</p>
      <p>Nuevo salario: ${aumentarSalario()}</p>

      <Ejemplo01 />
    </>
  );
}

function Ejemplo05() {
  const nombre: string = "Tomas Ayala";

  // Ambito global
  let salario = 800;

  function aumentarSalario() {
    // Ambito local
    let aumento = 100;

    return salario + aumento;
  }

  return (
    <>
      <h1>Empleado</h1>
      <p>{nombre}</p>
      <p>Salario: ${salario}</p>
      <p>Nuevo salario: ${aumentarSalario()}</p>

      <Ejemplo01 />
    </>
  );
}

export default Ejemplo02;