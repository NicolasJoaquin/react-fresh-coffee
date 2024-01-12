# Documentación del Proyecto FreshCoffee (Frontend)

## Descripción General

El proyecto FreshCoffee (Frontend) es la interfaz de usuario para la aplicación de compras en línea FreshCoffee, que se integra con el proyecto FreshCoffee (Backend). Desarrollado utilizando React JS, proporciona a los usuarios la capacidad de realizar pedidos y a los administradores la gestión de pedidos y productos.

## Tecnologías Utilizadas

- [React JS](https://reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
- [React Router](https://reactrouter.com/): Librería para el ruteo en la aplicación.
- [Axios](https://axios-http.com/) y [SWR](https://swr.vercel.app/): Utilizados para comunicarse con la API desarrollada en Laravel 10.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/): Implementado para mostrar toasts comunicativos en la interfaz de usuario.
- [Tailwind CSS](https://tailwindcss.com/): Framework de estilos utilizado para el diseño y la presentación.
- [Vite](https://vitejs.dev/): Manejador de dependencias para la construcción y desarrollo del proyecto.
- [React Modal](https://reactcommunity.org/react-modal/): Librería para la implementación de contenedores modales.

## Integración con FreshCoffee (Backend)

Este proyecto se integra con el backend de FreshCoffee, que está desarrollado en Laravel 10. La comunicación entre el frontend y el backend se realiza a través de endpoints de la API.

## Roles y Funcionalidades

### Usuario Comprador

1. **Inicio de Sesión:**
   - Debes iniciar sesión para comenzar a armar tu pedido.

2. **Exploración de Productos:**
   - Utiliza el sidebar izquierdo para navegar por las categorías de productos.
   - Puedes cancelar tu pedido en cualquier momento, lo que te desconectará y eliminará los productos agregados.

3. **Selección de Productos:**
   - En el centro de la pantalla, visualiza productos de la categoría seleccionada.
   - Haz clic en "Agregar" para abrir un modal y agregar productos al pedido.
   - Modifica la cantidad de productos existentes y guarda los cambios desde el mismo modal.

4. **Resumen del Pedido:**
   - En el sidebar derecho, visualiza un resumen del pedido actual.
   - Edita o elimina productos del pedido.
   - Confirma el pedido haciendo clic en "Confirmar pedido" para iniciar el procesamiento de la compra.

### Administrador de la Tienda

1. **Inicio de Sesión:**
   - Debes iniciar sesión como administrador para gestionar pedidos y productos.

2. **Gestión de Pedidos:**
   - En el sidebar izquierdo, selecciona la solapa "Pedidos".
   - Visualiza las órdenes emitidas por los clientes.
   - Ver resumen de productos, cliente, total del pedido.
   - Finaliza un pedido haciendo clic en "Finalizar".

3. **Gestión de Productos:**
   - En el sidebar izquierdo, selecciona la solapa "Productos".
   - Visualiza todos los productos de la tienda.
   - Da de baja productos para usuarios compradores haciendo clic en "Producto agotado".

4. **Cierre de Sesión:**
   - Cierra sesión utilizando el botón correspondiente.

## Estructura de la Aplicación

Esta aplicación está diseñada como una arquitectura de frontend separada del backend. La comunicación se realiza mediante endpoints de la API Laravel 10.

## Nota Adicional

Esta aplicación no es monolítica. En este documento, nos centramos específicamente en la documentación del frontend.
