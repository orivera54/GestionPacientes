# Instrucciones para Crear la Base de Datos

Estas instrucciones te guiarán para crear la base de datos `gestordb` utilizando el script SQL proporcionado.

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes antes de comenzar:
- [PostgreSQL](https://www.postgresql.org/download/) (preferiblemente la versión más reciente)
- Un cliente de PostgreSQL como [pgAdmin](https://www.pgadmin.org/download/) o la línea de comandos `psql`

## Paso 1: Abrir el Cliente de PostgreSQL

Abre tu cliente de PostgreSQL preferido. Puedes usar pgAdmin o la línea de comandos `psql`.

### Usando pgAdmin

1. Abre pgAdmin e inicia sesión en tu servidor PostgreSQL.
2. Haz clic derecho en "Bases de datos" y selecciona "Crear" -> "Base de datos...".
3. Ingresa `gestordb` como el nombre de la base de datos y haz clic en "Guardar".

### Usando la Línea de Comandos `psql`

1. Abre una terminal y ejecuta el siguiente comando para conectarte a tu servidor PostgreSQL:


psql -U tu_usuario -h tu_host

2. Una vez conectado, ejecuta el siguiente comando para crear la base de datos:


CREATE DATABASE gestordb;


## Paso 2: Ejecutar el Script SQL

Usando pgAdmin

Selecciona la base de datos gestordb en el panel de navegación.

Haz clic en el botón "Ejecutar/Consulta" en la barra de herramientas.

Copia y pega el contenido del script SQL proporcionado en el editor de consultas.

Haz clic en el botón "Ejecutar" para ejecutar el script y crear las tablas y datos necesarios.

Usando la Línea de Comandos psql Desde la terminal, ejecuta el siguiente comando para cambiar al contexto de la base de datos gestordb:


\c gestordb

Luego, ejecuta el siguiente comando para ejecutar el script SQL:


\i ruta/al/script.sql

Reemplaza ruta/al/script.sql con la ruta completa al archivo del script SQL en tu sistema.

## ¡Listo!
Con estos pasos, deberías tener la base de datos gestordb creada y configurada con las tablas y datos necesarios. Ahora puedes utilizar esta base de datos con tu aplicación.
