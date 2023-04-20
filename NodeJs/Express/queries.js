const express = require('express');

const app = express();

/**EJEMPLO DE QUERY
 * localhost:3000/hello/diego?=nombre.usuario
 * localhost:3000/hello/diego?=nombre.usuario&edad=23
 * localhost:3000/hello/diego?=nombre.usuario&edad=23&libros%javascript=20 el % es un espacio en el query
 * localhost:3000/hello/users?user=Diego&user=Marcos&user=Fran  devuelve a el objeto query{ user: ['Diego','Marcos','Fran']  }
 */

app.get('/hello/diego', (req,res) => {
    console.log(req.query);
    res.send('Viendo queryes');
})

app.all('/info',(req,res) =>{ //app.all indica que la ruta recibe todas las peticiones que hay
    res.send('Server info');
})

app.listen(3000);
console.log('Server on port 3000');

