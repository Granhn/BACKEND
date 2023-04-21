const express = require('express');
const app = express();

const showInfo = (req,res, next) =>{ //Una vez terminado lo indicado aca, usa next() y envia  a la pagina que deberia ir
    console.log(`Route: ${req.url}\nMetodo: ${req.method}` );
    next();
}
const isAuthenticated = (req,res, next) =>{ //Una vez terminado lo indicado aca, usa next() y envia  a la pagina que deberia ir
    if(req.query.login === 'diego@trismegisto.com')  next();
    else 
    res.send('No autorizado')
}



app.use(showInfo);

app.get('/profile',(req, res) => {
    res.send('Profile page')
})


app.use(isAuthenticated);
app.get('/dashboard',(req,res) => {
    res.send('Dashboard page')
})




console.log('Listening on port 3000');
app.listen(3000);
