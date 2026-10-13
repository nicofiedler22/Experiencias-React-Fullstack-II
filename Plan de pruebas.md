# Plan de Pruebas Unitarias

**Nombre del Estudiante:** Victor Andrade
<br />

**Componente / Módulo Principal:** Home, Contacto.
<br />

**Fecha:** 01-01-2027

| ID | Componente<br>*(describe)* | Caso de Prueba<br>*(it / test)* | Preparación<br>*(Arrange: props, mocks)* | Acción<br>*(Act: fireEvent, render)* | Resultado Esperado<br>*(Assert: expect)* | Estado<br>*(Pasa / Falla)* |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
PU-001 | TarjetaProducto | Debe cambiar el texto del boton a "Probado" cuando el usuario haga click. | Crear un objeto "productoMOK" con el nombre "Sentido" | Renderizar el componente y simular un click en el botono | El boton debe contener el texto "❤️ Probado" | FALLO
| PU-002 | Contacto | Debe permitir en el campo "Nombre" ingresar el valor "Pepito" | Renderiza el formulario, busca el campo "Nombre" e ingresa el valor "Pepito" |  | El campo nombre debe tener como valor el texto "Pepito" |  |