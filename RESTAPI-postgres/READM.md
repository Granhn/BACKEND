# Primer CRUD creado con Express (Node.js) y Postgresql

## Indice

1. [Tecnologias usadas](#tecnologias-usadas)
2. [Explicacion](#explicacion)

---
## Tecnologias usadas
1. Postgresql 💻
1. Express ⏩
1. Visual Studio Code ✍️
1. PgAdmin 🐘
---

## Explicacion

Crud (Create, delete, update, delete) creado haciendo uso del framework de node.js "Express", los datos creados son guardados en una base de datos creada en PostgreSql


## Configuracion

Para cambiar el puerto en que tu servidor de node.js sera alojado puedes cambiar el valor de la variable port y escoger el puerto que tu quieras 
```js
const port = 3000;
```

En la carpeta "routes" se encuentras las rutas usadas para este prouecto.

En controllers podemos encontrar la configuracion a la base de datos
```js
const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:'',
    database:'firstapi'
})
```
Para correr la aplicacion se hace uso del localhost, si tienes tu propio servidor puedes reemplazar los valores de 
```js
const pool = new Pool({
    host: 'Nombre de tu host',
    user: 'Nombre del usuario de tu base de dato',
    password:'Contraseña de tu usuario',
    database: 'La base de datos que sera usada',
    port: 'El puerto de tu base de datos'
})
```

En este mismo archivo podemos encontrar los controladores de ruta, los cuales son exportados e incluidos en el archivo de rutas "routes.js"

Para ejecutar el proyecto instalar las dependencias con
```zsh
npm i
```
Luego ubicarse en la carpeta principal del proyecto y ejecutar el archivo index.js con
```
node index.js
```