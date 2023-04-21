const express = require('express');


const app = express();


app.get('/', (req, res) => {

    res.send('Hola desde el restAPI');

})


console.log("Server listeing on port 3000");
app.listen(3000);


