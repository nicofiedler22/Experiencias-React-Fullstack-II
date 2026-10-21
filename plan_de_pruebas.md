# Plan de Pruebas Unitarias - Gas Licuado "El Volcán"

**Nombre de los Estudiantes:** Benjamin Parra / Nicolas Fiedler
**Componente / Módulo Principal:** Catálogo, Carrito, Autenticación y Componentes Atómicos.  
**Fecha:** 19-10-2026  
**Entorno de Pruebas:** Vitest + React Testing Library + JSDOM  

| ID | Componente<br>*(describe)* | Caso de Prueba<br>*(it / test)* | Preparación<br>*(Arrange: props, mocks)* | Acción<br>*(Act: fireEvent, render)* | Resultado Esperado<br>*(Assert: expect)* | Estado<br>*(Pasa / Falla)* |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| PU-001 | Boton | Debe renderizar el texto proporcionado | Montar componente `<Boton texto="Comprar Balón" />` | Se busca el botón por rol y nombre en pantalla | El botón está presente en el documento con su texto visible | Pasa |
| PU-002 | Boton | Debe disparar la función onClick al ser presionado | Bandera booleana en false y callback asignado al botón | Simular click del usuario mediante `fireEvent.click` | La función se ejecuta y la bandera cambia a true | Pasa |
| PU-003 | MensajeAlerta | Debe mostrar el texto de error en color rojo | Componente `<MensajeAlerta tipo="error" mensaje="..." />` | Se obtiene el elemento con role="alert" | El texto coincide y su estilo de color es estrictamente 'red' | Pasa |
| PU-004 | ColaboradorCard | Debe renderizar el nombre y cargo del trabajador | Pasar props con nombre "Benjamin Parra" y cargo "El admin" | Renderizar la card en el DOM | Los textos del colaborador y su cargo se muestran correctamente | Pasa |
| PU-005 | Footer | Debe incluir los derechos reservados de El Volcán | Montar componente `<Footer />` | Se busca el texto institucional de copyright | Se visualiza la frase "Todos los derechos y zurdos reservados" | Pasa |
| PU-006 | TarjetaProducto | Debe mostrar el nombre y precio formateado en pesos chilenos | Objeto mock de balón de 15 KG con precio 25000 | Renderizar con contexto global `AppProvider` | Se muestra el nombre del balón y el precio con formato "$25.000" | Pasa |
| PU-007 | TarjetaProducto | Debe alternar a "En Favoritos" al presionar el botón de favorito | Mock con balón ID 101 y estado inicial no favorito | Click sobre el botón "Guardar Favorito" | El texto cambia dinámicamente a "❤️ En Favoritos" | Pasa |
| PU-008 | Login | Debe mostrar error si el usuario presiona ingresar con campos vacíos | Renderizar la vista `<Login />` dentro de Router | Click en botón "INGRESAR" sin ingresar datos | Aparece en pantalla: "Debe ingresar su nombre de usuario." | Pasa |
| PU-009 | Login | Debe aceptar cualquier correo corporativo sin importar el dominio | Cargar formulario con correo `@elvolcan-gas.cl` | Click en botón "INGRESAR" | Se esperaba permitir el acceso, pero la validación estricta de dominios lo bloquea | FALLA |
| PU-010 | Error404 | Debe mostrar mensaje informativo y enlace de retorno al inicio | Montar componente `<Error404 />` con BrowserRouter | Se busca el título y el enlace | Muestra el texto "ERROR 404" y el enlace funcional al inicio | Pasa |