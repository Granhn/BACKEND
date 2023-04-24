const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/routes');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(routes);


app.listen(port);
console.log(`Server on port ${port}`);