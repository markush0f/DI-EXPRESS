# 🌟 Implementación de Inyección de Dependencias en Express con Awilix

Este mini-proyecto muestra cómo implementar **Inyección de Dependencias (DI)** en una aplicación **Express** utilizando **Awilix**, un contenedor de **Inversión de Control (IoC)** para **Node.js**.

---

## 📌 Introducción a Awilix y DI

El contenedor en el contexto de **Awilix** se encarga de gestionar y proveer instancias de clases y servicios en tu aplicación mediante la **Inyección de Dependencias**. Aquí se detallan las funciones principales del contenedor:

### ⚙️ Funciones del Contenedor

1. 🔹 **Registro de Dependencias:**
   - Permite registrar **clases, servicios, valores o funciones** que la aplicación necesitará.

2. 🔹 **Resolución de Dependencias:**
   - Se encarga de **resolver y proveer** las dependencias cuando se solicitan.
   - Si `UserController` necesita una instancia de `UserService`, el contenedor la proporciona automáticamente.

3. 🔹 **Gestión del Ciclo de Vida:**
   - Métodos disponibles:
     - `.singleton()`: Garantiza **una única instancia** en toda la aplicación.
     - `.scoped()`: Crea **una nueva instancia por cada solicitud HTTP**.
     - `.transient()`: Crea **una nueva instancia cada vez que se inyecta**.

4. 🔹 **Inyección de Dependencias Automática:**
   - Reduce el acoplamiento y mejora la mantenibilidad del código.
   - Ejemplo: Al instanciar `UserController`, Awilix inyecta automáticamente `UserService`, `AuthService` y `LoggerService`.

5. 🔹 **Modularidad y Escalabilidad:**
   - Permite agregar, cambiar o quitar dependencias sin modificar múltiples partes del código.
   - Facilita el mantenimiento y la evolución de la aplicación.

---

## 🚀 Ejemplo de Implementación

### 🔧 1. Instalación de Awilix

Instala **Awilix** y las dependencias necesarias:

```bash
npm install awilix express
