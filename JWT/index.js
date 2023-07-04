const express = require('express');
const jwt = require('jsonwebtoken');
const routes = require('./routes/routes');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(routes);



app.listen(3000);
console.log('Server on port 3000');