# Implementación de Inyección de Dependencias en Express con Awilix

Este mini-proyecto muestra cómo implementar Inyección de Dependencias (DI) en una aplicación Express utilizando Awilix, un contenedor de IoC (Inversión de Control) para Node.js.

## Introducción a Awilix y DI

El contenedor en el contexto de Awilix se encarga de gestionar y proveer instancias de clases y servicios en tu aplicación mediante la Inyección de Dependencias. Aquí se detallan las funciones principales del contenedor:

### Funciones del Contenedor

1. **Registro de Dependencias:**  
   El contenedor permite registrar clases, servicios, valores o funciones que la aplicación necesitará.

2. **Resolución de Dependencias:**  
   Se encarga de resolver y proveer las dependencias cuando se solicitan. Por ejemplo, si `UserController` necesita una instancia de `UserService`, el contenedor proporciona automáticamente esa instancia, asegurando que todas las dependencias requeridas sean satisfechas.

3. **Gestión del Ciclo de Vida:**  
   Awilix ofrece métodos como `.singleton()` para controlar el ciclo de vida de las instancias. Un singleton garantiza que solo haya una única instancia de esa clase en toda la aplicación. También se puede utilizar `.scoped()` para crear una nueva instancia por cada solicitud HTTP, o `.transient()` para una nueva instancia cada vez que se inyecta.

4. **Inyección de Dependencias:**  
   Facilita la inyección automática de dependencias en clases y funciones, reduciendo el acoplamiento y mejorando la mantenibilidad del código. Esto significa que cuando se crea una instancia de `UserController`, Awilix se encarga de inyectar automáticamente `UserService`, `AuthService`, y `LoggerService`, entre otros.

5. **Modularidad y Escalabilidad:**  
   Permite que la aplicación sea más modular y escalable al agregar, cambiar o quitar dependencias sin tener que modificar cada lugar donde se usan. Esto facilita el mantenimiento y la evolución del código a medida que la aplicación crece.

## Ejemplo de Implementación

Para integrar Awilix en tu aplicación Express, sigue estos pasos básicos:

1. **Instalación de Awilix:**  
   Instala Awilix y las dependencias necesarias:

   ```bash
   npm install awilix express
