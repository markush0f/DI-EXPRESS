# 🌟 Dependency Injection in Express with Awilix

This mini-project demonstrates how to implement **Dependency Injection (DI)** in an **Express** application using **Awilix**, an **Inversion of Control (IoC)** container for **Node.js**.

[🇪🇸 Switch to Spanish](#-inyección-de-dependencias-en-express-con-awilix)

---

## 📌 Introduction to Awilix and DI

In the context of **Awilix**, the container manages and provides instances of classes and services in your application through **Dependency Injection**. Below are the main container functions:

### ⚙️ Container Functions

1. 🔹 **Dependency Registration:**
   - Allows registering **classes, services, values, or functions** needed by the application.

2. 🔹 **Dependency Resolution:**
   - Resolves and provides dependencies when requested.
   - If `UserController` needs an instance of `UserService`, the container automatically provides it.

3. 🔹 **Lifecycle Management:**
   - Available methods:
     - `.singleton()`: Ensures **a single instance** throughout the application.
     - `.scoped()`: Creates **a new instance per HTTP request**.
     - `.transient()`: Creates **a new instance each time it's injected**.

4. 🔹 **Automatic Dependency Injection:**
   - Reduces coupling and improves code maintainability.
   - Example: When instantiating `UserController`, Awilix automatically injects `UserService`, `AuthService`, and `LoggerService`.

5. 🔹 **Modularity and Scalability:**
   - Allows adding, modifying, or removing dependencies without modifying multiple code parts.
   - Simplifies maintenance and application evolution.

---

## 🚀 Implementation Example

### 🔧 1. Install Awilix

Install **Awilix** and required dependencies:

```bash
npm install awilix express
