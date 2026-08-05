## Interpretación General de los Códigos

Ambos fragmentos forman una aplicación básica en **React (con Vite)** que demuestra el concepto fundamental de **reutilización de componentes** y **paso de datos mediante props** (propiedades).

A continuación se detalla de qué se trata cada uno:

---

### 1. Interpretación de `src/App.jsx`

* **De qué se trata:** Es el **punto de entrada visual y contenedor principal** de la aplicación. Su objetivo es organizar la estructura de la página y actuar como el "cerebro" que alimenta de información a los componentes más pequeños.
* **Qué está haciendo exactamente:**
* Crea una interfaz sencilla con un título principal ("Lista de Usuarios").
* Utiliza tres veces un mismo componente llamado `TarjetaUsuario`.
* En cada uso (o instancia), le inyecta **datos completamente diferentes** (diferentes nombres, profesiones y edades) aprovechando las *props*. Esto demuestra la gran ventaja de React: escribir el diseño una sola vez y reutilizarlo múltiples veces cambiando solo los datos.



---

### 2. Interpretación de `src/components/TarjetaUsuario.jsx`

* **De qué se trata:** Es un **componente reutilizable** (un molde o plantilla). Su único propósito es recibir datos del exterior, darles forma visual (como si fuera una tarjeta de presentación o perfil) y mostrarlos en pantalla.
* **Qué está haciendo exactamente:**
* Recibe un paquete de datos (las *props*: `nombre`, `profesion` y `edad`) gracias a la desestructuración de JavaScript.
* Dibuja una caja con estilos limpios (borde gris, esquinas redondeadas, ancho definido).
* Inserta de manera dinámica la información recibida dentro de etiquetas HTML (`<h3>` para el nombre y `<p>` para los textos descriptivos), adaptándose automáticamente a los datos que le pase el componente padre (`App.jsx`).
