# Prueba Técnica - Documentación del Proyecto

Este repositorio contiene una prueba técnica que consiste en un proyecto desarrollado en Node.js utilizando Express. El proyecto incluye la implementación de diferentes endpoints relacionados con la gestión de bodegas, inventarios y productos.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- src
  - controllers
    - bodegas.controllers.js
    - inventarios.controllers.js
    - productos.controllers.js
  - db
    - database.js
    - data.sql
  - routes
    - bodegas.routes.js
    - inventarios.routes.js
    - productos.routes.js
- app.js
- index.js
- config.js
- .env

- Carpeta `src`: Contiene tres carpetas (`controllers`, `db`, `routes`) y tres archivos (`app.js`, `index.js`, `config.js`).
- Carpeta `controllers`: Contiene los controladores para cada entidad (`bodegas.controllers.js`, `inventarios.controllers.js`, `productos.controllers.js`).
- Carpeta `db`: Contiene dos archivos (`data.sql`, `database.js`).
- Carpeta `routes`: Contiene los archivos de rutas para cada entidad (`bodegas.routes.js`, `inventarios.routes.js`, `productos.routes.js`).
- El archivo `app.js` es el punto de entrada de la aplicación Express.
- El archivo `index.js` inicia el servidor y configura el puerto de escucha.
- El archivo `config.js` contiene la configuración de la base de datos.
- El archivo `.env` contiene las variables de entorno para la configuración de la base de datos.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- `mysql2`: Permite la conexión y comunicación con la base de datos MySQL.
- `dotenv`: Carga las variables de entorno desde el archivo `.env`.
- `express`: Framework web para Node.js.

Asegúrate de tener estas dependencias instaladas antes de ejecutar el proyecto.

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto.
3. Instala las dependencias utilizando el siguiente comando: npm install
4. Crea una base de datos MySQL en tu entorno local.
5. Ejecuta el script de creación de tablas `data.sql` en tu base de datos.
6. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:
DB_HOST=nombre_de_host
DB_USER=nombre_de_usuario
DB_PASSWORD=contraseña_de_usuario
DB_DATABASE=nombre_de_base_de_datos
Reemplaza `nombre_de_host`, `nombre_de_usuario`, `contraseña_de_usuario` y `nombre_de_base_de_datos` con los valores correspondientes para tu configuración de base de datos.
Reemplaza `nombre_de_host`, `nombre_de_usuario`, `contraseña_de_usuario` y `nombre_de_base_de_datos` con los valores correspondientes para tu configuración de base de datos.
7. Inicia el servidor utilizando el siguiente comando:
node index.js
8. Ahora puedes realizar solicitudes a los diferentes endpoints del proyecto.

## Endpoints Disponibles

A continuación se detallan los endpoints disponibles en el proyecto:

### Bodegas

- `GET /bodegas`: Retorna la lista de bodegas ordenadas alfabéticamente.
- `POST /bodegas`: Crea una nueva bodega. Se deben proporcionar los datos de entrada en el cuerpo de la solicitud.

### Inventarios

- `POST /inventarios`: Agrega registros al inventario. Los parámetros de entrada son `id_producto`, `id_bodega` y `cantidad`. El endpoint valida si la combinación de producto y bodega ya existe en el inventario y realiza un INSERT o UPDATE según corresponda.

### Productos

- `GET /productos`: Retorna la lista de productos ordenados alfabéticamente.
- `GET /productos/total`: Retorna la lista de productos en orden descendente por el campo "Total", que representa la cantidad total de unidades considerando todas las bodegas.
- `POST /productos`: Crea un nuevo producto y asigna una cantidad inicial en el inventario de la bodega por defecto.

Recuerda ajustar los parámetros de configuración de la base de datos en el archivo `config.js` y asegurarte de tener las dependencias (`mysql2`, `dotenv`, `express`) instaladas antes de ejecutar el proyecto.