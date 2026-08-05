## Documentación Técnica: Uso de Componentes y Props en React

A continuación, se presenta la documentación explicativa detallada de cada elemento, estructura y concepto utilizado en los códigos de `App.jsx` y `TarjetaUsuario.jsx`.

---

### 1. Componente Padre (`src/App.jsx`)

El archivo `App.jsx` actúa como el **componente principal o contenedor**. Su función es orquestar la interfaz y suministrar los datos iniciales.

* **`import TarjetaUsuario from './components/TarjetaUsuario';`**
* **Qué es:** Una importación de módulo en JavaScript/ES6.
* **Por qué se usa:** Permite traer un archivo externo (el componente hijo `TarjetaUsuario.jsx`) para poder utilizarlo dentro de la estructura visual de `App`.


* **`<div style={{ padding: '20px', fontFamily: 'sans-serif' }}>`**
* **Qué es:** Un contenedor HTML (`div`) con estilos en línea (Inline Styles) aplicados mediante un objeto de JavaScript (`{{ ... }}`).
* **Por qué se usa:** En React, los estilos en línea se definen con doble llave para estructurar reglas CSS directamente en el elemento (en este caso, márgenes internos y tipografía general).


* **Envío de Props (`nombre="..."`, `profesion="..."`, `edad={...}`):**
* **Qué son:** Atributos personalizados pasados al componente hijo de forma idéntica a los atributos HTML.
* **Por qué se usan:** Permiten que un mismo componente reutilizable reciba información dinámica desde el exterior. Nota que los textos van entre comillas (`""`) como cadenas de texto (`String`), mientras que la edad usa llaves (`{}`) para denotar un valor numérico (`Number`).



---

### 2. Componente Hijo (`src/components/TarjetaUsuario.jsx`)

El archivo `TarjetaUsuario.jsx` representa el **componente reutilizable**. Su estructura está diseñada exclusivamente para recibir datos y renderizarlos.

* **`function TarjetaUsuario({ nombre, profesion, edad })`**
* **Qué es:** Un componente funcional de React que utiliza **desestructuración de objetos** en sus parámetros de entrada.
* **Por qué se usa:** En lugar de recibir un objeto genérico llamado `props`, la desestructuración extrae directamente las propiedades (`nombre`, `profesion`, `edad`) para usarlas de manera inmediata como variables locales.


* **Contenedor Estilizado (`<div style={{ ... }}>`)**
* **Qué es:** Estilos CSS encapsulados para dar formato de tarjeta visual (bordes grises, esquinas redondeadas y un ancho fijo de `250px`).
* **Por qué se usa:** Da estructura visual independiente a cada tarjeta generada en pantalla.


* **Inyección de Variables mediante Llaves (`{nombre}`, `{profesion}`, `{edad}`):**
* **Qué es:** Sintaxis JSX para evaluar expresiones de JavaScript dentro del marcado HTML.
* **Por qué se usan:** Permiten incrustar el contenido dinámico recibido a través de las props directamente dentro de las etiquetas `<h3>` y `<p>`.



---

### 3. Resumen de Conceptos Clave Aplicados

| Concepto | Dónde se aplicó | Propósito Principal |
| --- | --- | --- |
| **Componentes** | `App.jsx` y `TarjetaUsuario.jsx` | Modularizar la interfaz en bloques pequeños y mantenibles. |
| **Props (Propiedades)** | Envío desde `App` y recepción en `TarjetaUsuario` | Comunicar datos de forma unidireccional (de padre a hijo) garantizando reutilización. |
| **JSX** | Retornos de ambas funciones | Mezclar la estructura visual tipo HTML con la lógica de JavaScript de manera limpia. |
