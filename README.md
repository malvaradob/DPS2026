# Sistema de empleados
# 📚 Git Básico con Git Bash y GitHub
### Ejemplos de Control de Versiones

---

# 📖 Descripción

Este ejemplo tiene como objetivo aprender el funcionamiento de **Git** utilizando **Git Bash** y **GitHub**, aplicando los comandos más utilizados en proyectos reales de desarrollo de software.

Se desarrollará un proyecto ficticio denominado **SistemaEmpleado**, donde se practicarán operaciones como:
- Inicialización del repositorio
- Creación de commits
- Administración de ramas
- Merge
- Conexión con GitHub
- Push y Pull
- Clonado de repositorios

---

# 📑 Tabla de Contenido

- [Objetivos](#-objetivos)
- [Requisitos](#-requisitos)
- [Herramientas](#-herramientas)
- [Enunciado](#-enunciado-del-ejercicio)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Desarrollo Paso a Paso](#-desarrollo-paso-a-paso)
- [Resumen de Comandos](#-resumen-de-comandos)
- [Flujo del Ejercicio](#-flujo-del-ejercicio)
- [Ejercicio Propuesto](#-ejercicio-propuesto)
- [Descargar el Proyecto](#-descargar-el-proyecto)
- [Instalación](#-instalación)
- [Ejecución](#-ejecución)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

# 🎯 Objetivos
Al finalizar este ejemplo el estudiante será capaz de:
- Configurar Git
- Inicializar repositorios
- Crear commits
- Consultar historial
- Crear ramas
- Fusionar ramas
- Resolver un flujo básico de trabajo
- Publicar un proyecto en GitHub

---

# 💻 Requisitos
- Git instalado
- Git Bash
- Cuenta en GitHub
- Conexión a Internet

---

# 🛠 Herramientas

| Herramienta | Versión |
|------------|---------|
| Git | 2.50 o superior |
| Git Bash | Incluido en Git |
| GitHub | Cuenta gratuita |
| Visual Studio Code (Opcional) | Última versión |

---

# 📝 Enunciado del Ejercicio

La empresa **Soluciones Inteligentes** desea desarrollar un sistema llamado **SistemaEmpleado**.

Como desarrollador deberás:
- Crear el proyecto localmente.
- Inicializar Git.
- Registrar cambios mediante commits.
- Crear ramas.
- Fusionar ramas.
- Publicar el proyecto en GitHub.

---

# 📂 Estructura del Proyecto

```
SistemaEmpleado
│
├── README.md
├── empleados.txt
└── documentos
    └── Empleado01.txt
```

---

# 🚀 Desarrollo Paso a Paso

---

## Paso 1. Configurar Git

```bash
git config --global user.name "Coloque su nombre"
git config --global user.email "Coloque su correo electrónico (preferiblemente el que tenga asociado a la cuenta de GitHub)"
```

Verificar:

```bash
git config --list
```

---

## Paso 2. Crear el proyecto

```bash
mkdir SistemaEmpleado

cd SistemaEmpleado
```

---

## Paso 3. Inicializar Git

```bash
git init
```

---

## Paso 4. Verificar el estado

```bash
git status
```

---

## Paso 5. Crear archivos

```bash
touch README.md

touch empleados.txt

mkdir documentos

touch documentos/Empleado01.txt
```

---

## Paso 6. Agregar contenido

```bash
echo "# Sistema de Empleados" > README.md

echo "Roberto Aparicio Lopez" > empleados.txt

echo "Fotografia|CV" > documentos/Empleado01.txt
```

---

## Paso 7. Consultar cambios

```bash
git status
```

---

## Paso 8. Agregar archivos

```bash
git add .
```

---

## Paso 9. Primer Commit

```bash
git commit -m "Primer commit del proyecto"
```

---

## Paso 10. Consultar historial

```bash
git log

git log --oneline
```

---

## Paso 11. Modificar un archivo

```bash
echo "Ricardo Alas Perez" >> emplados.txt
```

Consultar diferencias:

```bash
git diff
```

---

## Paso 12. Segundo Commit

```bash
git add .

git commit -m "Se agrega un segundo empleado"
```

---

## Paso 13. Crear una rama

```bash
git branch desarrollo
```

---

## Paso 14. Cambiar de rama

```bash
git switch desarrollo
```

---

## Paso 15. Agregar archivo

```bash
echo "Modulo documentos" > Empleado01.txt
```

Guardar cambios:

```bash
git add .

git commit -m "Se agrega modulo documentos"
```

---

## Paso 16. Regresar a Master/Main

```bash
git switch main
```

o

```bash
git switch master
```

---

## Paso 17. Fusionar ramas

```bash
git merge desarrollo
```

---

## Paso 18. Crear repositorio en GitHub

Crear un repositorio llamado:

```
SistemaEmpleado
```

---

## Paso 19. Conectar el repositorio

```bash
git remote add origin https://github.com/usuario/SistemaEmpleado.git
```

Verificar:

```bash
git remote -v
```

---

## Paso 20. Publicar en GitHub

```bash
git push -u origin main
```

---

## Paso 21. Descargar cambios

```bash
git pull origin main
```

---

## Paso 22. Clonar un proyecto

```bash
git clone https://github.com/usuario/SistemaEmpleado.git
```

---

# 📚 Resumen de Comandos

| Comando | Descripción |
|----------|-------------|
| git init | Inicializar repositorio |
| git status | Estado del proyecto |
| git add | Agregar archivos |
| git commit | Crear commit |
| git log | Historial |
| git diff | Comparar cambios |
| git branch | Crear ramas |
| git switch | Cambiar ramas |
| git merge | Fusionar ramas |
| git remote | Asociar GitHub |
| git push | Subir cambios |
| git pull | Descargar cambios |
| git clone | Clonar proyecto |

---

# 🔄 Flujo del Ejercicio

```
Crear Proyecto
      │
      ▼
git init
      │
      ▼
Crear archivos
      │
      ▼
git add .
      │
      ▼
git commit
      │
      ▼
Crear rama
      │
      ▼
Modificar archivos
      │
      ▼
git commit
      │
      ▼
git merge
      │
      ▼
GitHub
      │
      ▼
git push
```

---

# 📝 Ejercicio Propuesto

Crear un proyecto llamado:

```
ControlEstudiantes
```

Debe contener:

```
README.md
estudiantes.txt
materias.txt
notas.txt
```

Realizar:

- Dos commits
- Una rama
- Un merge
- Publicar en GitHub

---

# ⬇ Descargar el Proyecto

## Clonar el repositorio

```bash
git clone https://github.com/usuario/SistemaEmpleado.git
```

Ingresar al proyecto

```bash
cd SistemaEmpleado
```

---

# ⚙ Instalación

Este ejemplo **no requiere instalar dependencias adicionales**, ya que se trabaja únicamente con Git y archivos de texto.

Verificar que Git esté instalado:

```bash
git --version
```

Resultado esperado:

```
git version 2.50.x
```

---

# ▶ Ejecución

Este proyecto no requiere compilación.

Para verificar el estado del repositorio:

```bash
git status
```

Consultar historial:

```bash
git log --oneline
```

Consultar ramas:

```bash
git branch
```

Consultar repositorio remoto:

```bash
git remote -v
```

---

# 👨‍💻 Autor

Mario Alvarado

Repositorio utilizado con fines educativos.

---

# 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.
Puedes utilizarlo libremente para fines académicos.
