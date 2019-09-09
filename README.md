# Nugget-UI

Librería de componentes React basados en Material-UI, enfocado en la fácil implementación y maquetación de layouts complejos.

## Instalación

> npm i nugget-ui

## Scripts

---

- build

> Realiza la transpilación de la librería mediante Babel, el resultado es un folder "dist" con la build.

- dev

> Corre un servidor nodemon que hace "watch" al folder de desarrollo (src) y ejecuta la compilación del proyecto cada vez que el folder de desarrollo cambie. Ejecutar este comando en ambiente de desarrollo.

- copy-nugget:win

> Comando obsoleto. Copia los archivos de build dentro del folder de instalación de wings, pero desafortunadamente el servidor de next.js no escucha cambios en node_modules para recompilar.

- package:win

> Realiza el empaquetado del proyecto mediante comandos de windows. El resultado es un archivo nugget.tgz identico a producción listo para ser consumido por otros proyectos. Este comando debe cambiar junto con la versión del proyecto.

- lint-init

> Inicializa el archivo de ESLint.

- lint

> Corre ESLint para realizar revisiones de estandarización de código.

- lint-fix

> Corrige la mayoría de los errores de ESLint detectados de forma automática.

## Instalación local

---

1. Clonar repositorio desde https://github.com/boneless-chicken/Nugget-UI.git
2. Ejecutar el comando **npm install**.
3. Ejecutar el script **package:win** (solo funciona en ambientes Windows).
4. El nugget.tgz resultante puede ser instalado ahora por el proyecto objetivo, haciendo **npm install [path]/nugget.tgz**.
